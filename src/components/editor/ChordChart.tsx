import { css } from '@emotion/css'
import { FC } from 'react'
import { BarBlock } from './BarBlock'
import { useSelector } from 'react-redux'
import { AddBarBlock } from './AddBarBlock'
import { ChordProgression } from '../../model/types'
import { AppState } from '../../state/types'
import { progressionsSlice } from '../../state/progressions'

export type ChartProps = {
  progressionId: string
}

const chordChartStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  flex-grow: 1;
  padding: 22px 50px;
`

export const ChordChart: FC<ChartProps> = ({ progressionId }) => {
  const progression = useSelector<AppState, ChordProgression>(
    (state) =>
      progressionsSlice.selectors.getProgression(state, progressionId)!,
  )
  return (
    <div className={chordChartStyle}>
      {progression.bars.map((barId, i) => (
        <BarBlock
          progressionId={progressionId}
          barId={barId}
          count={i + 1}
          key={barId}
        />
      ))}
      <AddBarBlock progressionId={progressionId} />
    </div>
  )
}
