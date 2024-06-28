import { ATBar, ATNote, ATRest, ATTrack } from './model'

// \title "Song Title"
// \subtitle Subtitle
// \artist Artist
// \album 'My Album'
// \words Daniel
// \music alphaTab
// \copyright Daniel
// \tempo 200
// \instrument 30

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
  ].filter((data): data is string => data !== undefined)
}

function getNote(note: ATNote): string {
  // fret.string.duration
  const base = `${note.fret}.${note.string}.${note.duration}`
  return note.chord ? `{ch "${note.chord}"} ${base}` : base
}

function getRest(note: ATRest): string {
  // r.duration
  return `r.${note.duration}`
}

function getBar(bar: ATBar): string {
  return bar.notes
    .map((note) => {
      switch (note.type) {
        case 'note':
          return getNote(note)
        case 'rest':
          return getRest(note)
        default:
          throw new TypeError(`Unexpected note type: ${(note as ATNote).type}`)
      }
    })
    .join(' ')
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
