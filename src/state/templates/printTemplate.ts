import slug from 'slug'
import { isNil } from '../../model/isNil'
import { Bar, ChordProgression, ChordSymbol, HasId } from '../../model/types'
import { store } from '../store'
import { AppState, ProgressionTemplate } from '../types'
import { getChordSymbolName } from '../../model/getChordSymbolName'

function asRecord<T extends HasId>(input: T[]): Record<string, T> {
  return input.reduce((record, item) => {
    record[item.id] = item
    return record
  }, {} as Record<string, T>)
}

const keyFactory = (ids: Map<string, string>) => {
  return {
    getOrCreate: (
      original: string,
      projectId: string,
      prefix: string,
      index: number,
    ): string => {
      if (ids.has(original)) {
        return ids.get(original)!
      }
      const newId = `${projectId}-${prefix}-${index}`
      ids.set(original, newId)
      return newId
    },
    get: (original: string) => {
      if (ids.has(original)) {
        return ids.get(original)!
      }
      return undefined
    },
  }
}

function sanitizeIds(template: ProgressionTemplate): ProgressionTemplate {
  const progId = slug(template.progression.name, { replacement: '-' })
  const keys = keyFactory(new Map())
  const chords = Object.fromEntries(
    Object.entries(template.chords).map(
      ([original, value], index): [string, ChordSymbol] => {
        const newId = keys.getOrCreate(
          original,
          progId,
          `chord-${getChordSymbolName(value).toLowerCase()}`,
          index,
        )
        return [newId, { ...value, id: newId }]
      },
    ),
  )

  const bars = Object.fromEntries(
    Object.entries(template.bars).map(
      ([original, value], index): [string, Bar] => {
        const newId = keys.getOrCreate(original, progId, 'bar', index)
        return [
          newId,
          {
            ...value,
            id: newId,
            chords: value.chords
              .map((chordId) => keys.get(chordId))
              .filter((key) => !isNil(key)),
          },
        ]
      },
    ),
  )

  const progression: ChordProgression = {
    ...template.progression,
    id: progId,
    bars: template.progression.bars
      .map((barId) => keys.get(barId))
      .filter((key) => !isNil(key)),
  }

  return { progression, bars, chords }
}

const printTemplate = () => {
  const state = store.getState() as AppState
  const id = window.location.hash.split('/')[1]!
  const progression = state.progressions[id]

  if (isNil(progression)) {
    throw new TypeError(`Progression "${id}" doesn't exist.`)
  }

  const bars = progression.bars
    .map((barId) => state.bars[barId]!)
    .filter((item) => !isNil(item))

  const chords = bars
    .flatMap((bar) => bar.chords)
    .map((chordId) => state.chords[chordId]!)
    .filter((item) => !isNil(item))

  const rawTemplate: ProgressionTemplate = {
    progression,
    bars: asRecord(bars),
    chords: asRecord(chords),
  }

  const template = sanitizeIds(rawTemplate)
  const json = JSON.stringify(template)
  navigator.clipboard.writeText(json)
  console.log(JSON.stringify(template))
}

const _window = window as any
_window.printTemplate = printTemplate
