import { css } from '@emotion/css'
import { FC } from 'react'
import { BarBlock } from './BarBlock'
import { useSelector } from 'react-redux'
import { AddBarBlock } from './AddBarBlock'
import { ChordProgression } from '../../model/types'
import { AppState, ConfigState } from '../../state/types'
import { progressionsSlice } from '../../state/progressions'
import { isNil } from '../../model/isNil'

const chordChartStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  padding: 22px 50px;
  overflow: auto;
  max-height: calc(100vh - 100px - 70px);
`

export const ChordChart: FC = () => {
  const { progressionId } = useSelector<AppState, ConfigState>(
    (state) => state.config,
  )
  const progression = useSelector<AppState, ChordProgression>(
    (state) =>
      progressionsSlice.selectors.getProgression(state, progressionId!)!,
  )

  if (isNil(progression)) {
    return null
  }
  return (
    <div className={chordChartStyle}>
      {progression.bars.map((barId, i) => (
        <BarBlock barId={barId} count={i + 1} key={barId} />
      ))}
      <AddBarBlock />
    </div>
  )
}
