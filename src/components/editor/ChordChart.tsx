import { css } from '@emotion/css'
import { FC } from 'react'
import { BarBlock } from './BarBlock'
import { useSelector } from 'react-redux'
import { AddBarBlock } from './AddBarBlock'
import { isNil } from '../../model/isNil'
import { useActiveProgression } from '../../modelHooks'

const chordChartStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  padding: 22px 60px;
  overflow: auto;
  max-height: calc(100vh - 100px - 70px);
  & * {
    overflow: hidden;
  }
`

export const ChordChart: FC = () => {
  const progression = useActiveProgression()

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
