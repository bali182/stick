import { isNil } from '../model/isNil'
import { ATBar, ATChord, ATItem, ATNote, ATRest, ATTrack } from './model'

// Reference: https://alphatab.net/docs/alphatex/introduction

function getMetaData(model: ATTrack): string[] {
  return [
    `\\track "${model.name}" "${model.shortName}"`,
    model.instrument ? `\\instrument "${model.instrument}"` : undefined,
    model.tuning ? `\\tuning ${model.tuning.join(' ')}` : undefined,
  ].filter((data): data is string => data !== undefined)
}

function withLabel(content: string, label: string | undefined): string {
  const parts = [content, isNil(label) ? undefined : `{ch "${label}"}`]
  return parts.filter((part) => part !== undefined).join(' ')
}

function withBrush(content: string): string {
  return `${content} {bd 120}`
}

function getNote(note: ATNote): string {
  return withLabel(`${note.fret}.${note.string}.${note.duration}`, note.label)
}

function getChord(chord: ATChord): string {
  const notes = chord.notes.map((note) => `${note.fret}.${note.string}`)
  return withBrush(
    withLabel(`(${notes.join(' ')}).${chord.duration}`, chord.label),
  )
}

function getRest(rest: ATRest): string {
  return withLabel(`r.${rest.duration}`, rest.label)
}

function getItem(note: ATItem): string {
  switch (note.type) {
    case 'note':
      return getNote(note)
    case 'chord':
      return getChord(note)
    case 'rest':
      return getRest(note)
  }
}

function getBar(bar: ATBar): string {
  return bar.items.map((note) => getItem(note)).join(' ')
}

function getBars(model: ATTrack): string[] {
  if (model.bars.length === 0) {
    return []
  }
  const firstBarMeta = [
    `\\clef ${model.clef}`,
    `\\ts ${model.timeSignature.top} ${model.timeSignature.bottom}`,
    `\\ks ${model.keySignature}`,
  ].join(' ')
  const [first, ...rest] = model.bars
  const bars = [
    `${firstBarMeta} ${getBar(first!)}`,
    ...rest.map((bar) => getBar(bar)),
  ]
  return bars
}

export function toAlphaTex(model: ATTrack): string {
  const metadata = getMetaData(model).join(' ')
  const lines = [
    metadata,
    // metadata.length > 0 && model.bars.length > 0 ? '.' : undefined,
    getBars(model).join('\n|'),
  ]
  return lines.join('\n')
}
