import { FC } from 'react'
import { BarBlock } from './BarBlock'
import { isNil } from '../../model/isNil'
import { useActiveProgression } from '../../modelHooks'
import { PureChordChart } from './pure/ChordChart/PureChordChart'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { nanoid } from 'nanoid'
import { Bar } from '../../model/types'
import { barsSlice } from '../../state/bars'
import { progressionsSlice } from '../../state/progressions'
import { AddBarBlock } from './pure/ChordChart/AddBarBlock'

export const ChordChart: FC = () => {
  const progression = useActiveProgression()

  const dispatch = useDispatch<AppDispatch>()

  const onAddBar = () => {
    const bar: Bar = { id: nanoid(), chords: [] }
    dispatch(barsSlice.actions.createBar({ bar }))
    dispatch(
      progressionsSlice.actions.addBars({
        progressionId: progression?.id!,
        barIds: [bar.id],
      }),
    )
  }

  if (isNil(progression)) {
    return null
  }
  return (
    <PureChordChart>
      {progression.bars.map((barId, i) => (
        <BarBlock barId={barId} count={i + 1} key={barId} />
      ))}
      <AddBarBlock onClick={onAddBar} />
    </PureChordChart>
  )
}
