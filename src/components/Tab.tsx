import { useRef, useEffect, FC } from 'react'
import { AlphaTabApi } from '@coderline/alphatab'
import { ATTrack } from '../alphaTex/model'
import { toAlphaTex } from '../alphaTex/toAlphaTex'

export type TabProps = {
  id: string
}

const model: ATTrack = {
  clef: 'Bass',
  instrument: 'AcousticBass',
  keySignature: 'Db',
  timeSignature: { top: 4, bottom: 4 },
  tempo: 140,
  bars: [
    {
      notes: [
        { type: 'note', duration: 4, string: 4, fret: 3 },
        { type: 'note', duration: 4, string: 2, fret: 1 },
        { type: 'rest', duration: 4 },
        { type: 'note', duration: 4, string: 4, fret: 2 },
      ],
    },
    {
      notes: [
        { type: 'note', duration: 4, string: 3, fret: 3 },
        { type: 'note', duration: 4, string: 3, fret: 1 },
        { type: 'rest', duration: 4 },
        { type: 'note', duration: 4, string: 4, fret: 3 },
      ],
    },
  ],
}

const content = toAlphaTex(model)

console.log(content)

// const content = `
// \\instrument "AcousticBass"
// .
// \\clef Bass \\ks D 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.4 {ch "Em"} 2.4.4 3.4.4 2.3.4
//       | 0.3.4 {ch "Am"} 3.3.4 3.4.4 2.4.4
//       | 0.4.1 {ch "Em"}
// `
// const x: RenderingResources = {
//   copyrightFont: new Font(),
//   titleFont: new Font(),
//   subTitleFont: new Font(),
//   wordsFont: new Font(),
//   effectFont: new Font(),
//   fretboardNumberFont: new Font(),
//   tablatureFont: new Font(),
//   graceFont: new Font(),
//   staffLineColor: new Color(),
//   barSeparatorColor: new Color(),
//   barNumberFont: new Font(),
//   barNumberColor: new Color(),
//   fingeringFont: new Font(),
//   markerFont: new Font(),
//   mainGlyphColor: new Color(),
//   secondaryGlyphColor: new Color(),
//   scoreInfoColor: new Color(),
// }

export const Tab: FC<TabProps> = ({ id }) => {
  const containerDom = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()
  useEffect(() => {
    apiRef.current = new AlphaTabApi(containerDom.current!, {
      core: {
        tex: true,
        fontDirectory: '/font/',
        engine: 'svg',
      },
      display: {
        staveProfile: 'Default',
        barsPerRow: 8,
        scale: 1.4,
        justifyLastSystem: true,
        resources: {
          staffLineColor: '#ffffff80',
          barSeparatorColor: '#fff',
          mainGlyphColor: '#fff',
          secondaryGlyphColor: '#fff',
          scoreInfoColor: '#fff',
          barNumberColor: '#fff',
        },
      },
      notation: {
        elements: {
          scoreTitle: 'Test',
          scoreWordsAndMusic: 'Bobo',
          effectTempo: 120,
          guitarTuning: false,
        },
      },
    })
    apiRef.current.render()
  }, [id])

  return (
    <div id={id} ref={containerDom as any}>
      {content}
    </div>
  )
}
