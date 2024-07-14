import { nanoid } from 'nanoid'
import { Bar, ChordProgression, ChordSymbol } from '../../model/types'
import { ProgressionTemplate } from '../types'

function prefixKey(
  key: string,
  prefix: string,
  ids: Map<string, string>,
): string {
  if (ids.has(key)) {
    return ids.get(key)!
  }
  const newId = `${prefix}-${nanoid()}`
  ids.set(key, newId)
  return newId
}

export function withUniqueIds(
  template: ProgressionTemplate,
  name: string,
): ProgressionTemplate {
  const prefix = name.replace(/\s+/g, '-').toLowerCase()
  const ids = new Map<string, string>()
  const chords = Object.fromEntries(
    Object.entries(template.chords).map(
      ([key, value]): [string, ChordSymbol] => [
        prefixKey(key, prefix, ids),
        { ...value, id: prefixKey(key, prefix, ids) },
      ],
    ),
  )

  const bars = Object.fromEntries(
    Object.entries(template.bars).map(([key, value]): [string, Bar] => [
      prefixKey(key, prefix, ids),
      {
        ...value,
        id: prefixKey(key, prefix, ids),
        chords: value.chords.map((chordId) => prefixKey(chordId, prefix, ids)),
      },
    ]),
  )

  const progression: ChordProgression = {
    ...template.progression,
    name,
    id: prefixKey(template.progression.id, prefix, ids),
    bars: template.progression.bars.map((barId) =>
      prefixKey(barId, prefix, ids),
    ),
  }

  return {
    chords,
    bars,
    progression,
  }
}
