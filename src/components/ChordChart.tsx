import { css } from '@emotion/css'
import { FC } from 'react'
import { ChordProgression } from '../chartModel'
import { BarBlock } from './BarBlock'

export type ChartProps = {
  progression: ChordProgression
}

const chordChartStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;
`

export const ChordChart: FC<ChartProps> = ({ progression }) => {
  return (
    <div className={chordChartStyle}>
      {progression.bars.map((bar, i) => (
        <BarBlock bar={bar} key={i} count={i + 1} />
      ))}
    </div>
  )
}
