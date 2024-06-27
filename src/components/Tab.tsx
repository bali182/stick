import { useRef, useEffect, FC } from 'react'
import { AlphaTabApi, RenderingResources } from '@coderline/alphatab'

export type TabProps = {
  id: string
}

const content = `
\\tempo 220 \\tuning A4 E4 C4 G4 . \\ts 4 4 0.4 1.4 3.4 0.4 | 2.4 3.4 0.4
2.4 | 3.4 0.3 2.3 0.2 | 1.2 3.2 0.1 1.1 | 3.1.1
`

export const Tab: FC<TabProps> = ({ id }) => {
  const containerDom = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()
  useEffect(() => {
    apiRef.current = new AlphaTabApi(containerDom.current!, {
      core: {
        tex: true,
        fontDirectory: '/font/',
      },
      display: {
        staveProfile: 'Default',
        resources: {},
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
