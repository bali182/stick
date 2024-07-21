import { nanoid } from 'nanoid'
import { Bar, ChordProgression, ChordSymbol } from '../../model/types'
import { AppState, ProgressionTemplate } from '../types'
import slug from 'slug'
import { getUniqueName } from '../../model/utils'

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

function getProgressionId(state: AppState, name: string): string {
  const { progressions } = state
  let slugName = slug(name, { replacement: '-' })
  return getUniqueName(slugName, new Set(Object.keys(progressions)))
}

export function withUniqueIds(
  state: AppState,
  template: ProgressionTemplate,
  name: string,
): ProgressionTemplate {
  const id = getProgressionId(state, name)
  const ids = new Map<string, string>()
  const chords = Object.fromEntries(
    Object.entries(template.chords).map(
      ([key, value]): [string, ChordSymbol] => [
        prefixKey(key, id, ids),
        { ...value, id: prefixKey(key, id, ids) },
      ],
    ),
  )

  const bars = Object.fromEntries(
    Object.entries(template.bars).map(([key, value]): [string, Bar] => [
      prefixKey(key, id, ids),
      {
        ...value,
        id: prefixKey(key, id, ids),
        chords: value.chords.map((chordId) => prefixKey(chordId, id, ids)),
      },
    ]),
  )

  const progression: ChordProgression = {
    ...template.progression,
    id,
    name,
    bars: template.progression.bars.map((barId) => prefixKey(barId, id, ids)),
  }

  return {
    chords,
    bars,
    progression,
  }
}
