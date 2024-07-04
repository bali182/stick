import { isNil } from '../model/isNil'
import { ATBar, ATNote, ATTrack } from './model'

// Reference: https://alphatab.net/docs/alphatex/introduction

function getMetaData(model: ATTrack): string[] {
  return [
    model.title ? `\\title "${model.title}"` : undefined,
    model.subtitle ? `\\subtitle "${model.subtitle}"` : undefined,
    model.artist ? `\\artist "${model.artist}"` : undefined,
    model.album ? `\\album "${model.album}"` : undefined,
    model.words ? `\\words "${model.words}"` : undefined,
    model.music ? `\\music "${model.music}"` : undefined,
    model.copyright ? `\\copyright "${model.copyright}"` : undefined,
    model.tempo ? `\\tempo ${model.tempo}` : undefined,
    model.instrument ? `\\instrument "${model.instrument}"` : undefined,
    model.tuning ? `\\tuning ${model.tuning.join(' ')}` : undefined,
  ].filter((data): data is string => data !== undefined)
}

function getNote(note: ATNote): string {
  if (!note.rest) {
    if (isNil(note.fret) || isNil(note.string)) {
      throw new TypeError(
        `string and fret properties are required in ${JSON.stringify(note)}`,
      )
    }
  }
  const parts = [
    note.rest
      ? `r.${note.duration}`
      : `${note.fret}.${note.string}.${note.duration}`,
    note.chord ? `{ch "${note.chord}"}` : undefined,
  ].filter((part) => part !== undefined)
  return parts.join(' ')
}

function getBar(bar: ATBar): string {
  return bar.notes.map((note) => getNote(note)).join(' ')
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
  const metadata = getMetaData(model)
  const lines = [
    ...metadata,
    metadata.length > 0 && model.bars.length > 0 ? '.' : undefined,
    getBars(model).join('\n|'),
  ]
  return lines.join('\n')
}
