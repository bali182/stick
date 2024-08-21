import { Chord as _Chord, Note as _Note, Scale } from 'tonal'
import { ChordSymbol, ChordType, Note, Transition } from '../model/types'
import { getChordSymbolName } from '../model/getChordSymbolName'
import { CHORD_TYPES, NOTE_NAMES, TRANSITIONS } from '../model/constants'
import { isNil } from '../model/isNil'

type MatchResult = {
  length: number
  scaleRoot: Note
  scaleName: string
  children?: MatchResult[]
  scale: Set<Note>
}

const EMPTY_SET = new Set<any>()

function getScaleMap(
  scales: string[],
  notes: Note[],
): Map<string, Map<Note, Set<Note>>> {
  const result = new Map<string, Map<Note, Set<Note>>>()
  for (const scale of scales) {
    const scaleMap = new Map<Note, Set<Note>>()
    for (const root of notes) {
      const notes = Scale.get(`${root} ${scale}`).notes.map((note) =>
        _Note.simplify(note),
      )
      scaleMap.set(root, new Set(notes as Note[]))
    }
    result.set(scale, scaleMap)
  }
  return result
}

function getChordToneMap(roots: Note[], chordTypes: ChordType[]) {
  const chordTonesMap = new Map<string, Note[]>()
  for (const root of roots) {
    for (const type of chordTypes) {
      const chordName = getChordSymbolName({
        name: root,
        root: `${root}1`,
        id: '-',
        type,
      })
      const notes = _Chord
        .get(chordName)
        .notes.map((note) => _Note.simplify(note))
      chordTonesMap.set(chordName, notes as Note[])
    }
  }
  return chordTonesMap
}

export class ScaleMatcher {
  // Input
  protected readonly threshold: number
  protected readonly maxItems: number
  protected readonly chords: ChordSymbol[]

  // Cached
  protected readonly chordsToNotes: Map<ChordSymbol, Note[]>
  protected readonly matches: MatchResult[]

  // Static
  public static readonly SCALES = ['major', 'harmonic minor', 'melodic minor']
  public static readonly SCALE_MAP = getScaleMap(
    ScaleMatcher.SCALES,
    NOTE_NAMES,
  )
  public static readonly CHORD_TONE_MAP = getChordToneMap(
    NOTE_NAMES,
    CHORD_TYPES,
  )

  public constructor(
    chords: ChordSymbol[],
    treshold: number = 4,
    maxItems: number = 1,
  ) {
    this.chords = chords
    this.threshold = treshold
    this.maxItems = maxItems

    this.chordsToNotes = this.buildChordToNoteMap()
    this.matches = this.buildScaleMatches()
  }

  protected getMatch(
    chords: ChordSymbol[],
    scaleRoot: Note,
    scaleName: string,
  ): MatchResult | undefined {
    const scaleNotes =
      ScaleMatcher.SCALE_MAP.get(scaleName)?.get(scaleRoot) ?? EMPTY_SET
    for (let i = 0; i < chords.length; i += 1) {
      const chord = chords[i]!
      const notes = this.chordsToNotes.get(chord) ?? []
      const missesNote = notes.some((note) => !scaleNotes.has(note))
      if (missesNote) {
        if (i === 0) {
          return undefined
        }
        return { length: i, scaleName, scaleRoot, scale: scaleNotes }
      }
    }
    return { length: chords.length, scaleName, scaleRoot, scale: scaleNotes }
  }

  protected collectMatches(chords: ChordSymbol[]): MatchResult[] {
    const matches: MatchResult[] = []
    for (const scaleRoot of NOTE_NAMES) {
      for (const scaleName of ScaleMatcher.SCALES) {
        const match = this.getMatch(chords, scaleRoot, scaleName)
        if (!isNil(match) && match.length > 0) {
          matches.push(match)
        }
      }
    }
    return matches.sort((a, b) => b.length - a.length)
  }

  protected narrowMatches(matches: MatchResult[]): MatchResult[] {
    if (matches.length === 0) {
      throw new Error(`No matches.`)
    }
    // If there are no matches, panic
    const [head] = matches
    // If the matches don't hit the threshold, just return the first
    if ((head?.length ?? 0) < this.threshold) {
      return [head!]
    }
    // Get the matches that hit the threshold
    return matches
      .slice(0, this.maxItems)
      .filter((match) => match.length >= this.threshold)
  }

  protected recursivelyBuildMatches(match: MatchResult, chords: ChordSymbol[]) {
    // We have a scale fitting the whole progression, nothing else to do here.
    if (match.length === chords.length) {
      return
    }
    const remainingChords = chords.slice(match.length, chords.length)
    match.children = this.narrowMatches(this.collectMatches(remainingChords))
    for (const child of match.children) {
      this.recursivelyBuildMatches(child, remainingChords)
    }
  }

  protected recursivelyFlattenMatch(
    matchWithPossibleChildren: MatchResult,
    branch: MatchResult[],
    flat: MatchResult[][],
  ): void {
    const { children, ...match } = matchWithPossibleChildren
    if (isNil(children) || children.length === 0) {
      flat.push([...branch, match])
      return
    }

    for (const child of children) {
      this.recursivelyFlattenMatch(child, [...branch, match], flat)
    }
  }

  protected flattenMatches(matches: MatchResult[]): MatchResult[][] {
    const flat: MatchResult[][] = []
    for (const match of matches) {
      this.recursivelyFlattenMatch(match, [], flat)
    }
    return flat
  }

  protected buildScaleMatches(): MatchResult[] {
    const treeRoots = this.narrowMatches(this.collectMatches(this.chords))
    for (const match of treeRoots) {
      this.recursivelyBuildMatches(match, this.chords)
    }
    return this.flattenMatches(treeRoots)[0]!
  }

  protected buildChordToNoteMap(): Map<ChordSymbol, Note[]> {
    const chordsToNotes = new Map<ChordSymbol, Note[]>()
    for (const chord of this.chords) {
      const name = getChordSymbolName(chord)
      const notes = ScaleMatcher.CHORD_TONE_MAP.get(name)
      if (isNil(notes)) {
        throw new Error(`Unknown chord: ${name}`)
      }
      chordsToNotes.set(chord, notes)
    }
    return chordsToNotes
  }

  public getTransitions(
    chord: ChordSymbol,
    transitions: Transition[] = TRANSITIONS,
  ): Transition[] {
    // TODO
    return transitions
  }
}
