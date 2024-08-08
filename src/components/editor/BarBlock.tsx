import { FC } from 'react'
import { ChordBlock } from './ChordBlock'
import { useDispatch } from 'react-redux'
import { ChordSymbol } from '../../model/types'
import { nanoid } from 'nanoid'
import { barsSlice } from '../../state/bars'
import { progressionsSlice } from '../../state/progressions'
import { chordsSlice } from '../../state/chords'
import { AppDispatch } from '../../state/store'
import { useActiveProgression, useBar, useChordAt } from '../../modelHooks'
import { PureBarBlock } from './pure/BarBlock/PureBarBlock'
import { isNil } from '../../model/isNil'
import { MissingBarBlock } from './pure/BarBlock/MissingBarBlock'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

export type BarBlockProps = {
  barId: string
  count: number
}

export const BarBlock: FC<BarBlockProps> = ({ barId, count }) => {
  const bar = useBar(barId)
  const progression = useActiveProgression()
  const firstChord = useChordAt(barId, 0)

  const dispatch = useDispatch<AppDispatch>()

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: barId })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  const onDeleteBar = () => {
    const chordIds = bar?.chords ?? []
    dispatch(
      progressionsSlice.actions.removeBars({
        progressionId: progression?.id!,
        barIds: [barId],
      }),
    )
    dispatch(barsSlice.actions.deleteBar({ barId }))
    dispatch(chordsSlice.actions.deleteChords({ chordIds }))
  }

  const onAddFirstChord = () => {
    if (!isNil(firstChord)) {
      return
    }
    const chord: ChordSymbol = {
      id: nanoid(),
      name: 'C',
      type: 'MAJOR',
      root: 'C2',
    }
    dispatch(chordsSlice.actions.createChord({ chord }))
    dispatch(barsSlice.actions.addChords({ barId, chordIds: [chord.id] }))
  }

  const onAddSecondChord = () => {
    if (isNil(firstChord)) {
      return
    }
    const noteCount = progression!.noteCount / 2
    // Update first chord by removing it's transition, and halving note count
    const updatedChord: ChordSymbol = {
      ...firstChord,
      noteCount,
      transitionId: undefined,
    }
    // Create second chord as a clone of the first one
    const secondChord: ChordSymbol = {
      ...updatedChord,
      id: nanoid(),
    }

    dispatch(chordsSlice.actions.updateChord({ chord: updatedChord }))
    dispatch(chordsSlice.actions.createChord({ chord: secondChord }))
    dispatch(barsSlice.actions.addChords({ barId, chordIds: [secondChord.id] }))
  }

  if (isNil(bar)) {
    return <MissingBarBlock onDelete={onDeleteBar} />
  }

  return (
    <PureBarBlock
      count={count}
      onAddFirst={onAddFirstChord}
      onAddSecond={onAddSecondChord}
      onDelete={onDeleteBar}
      ref={setNodeRef}
      listeners={listeners}
      attributes={attributes}
      style={style}
    >
      {(bar?.chords ?? []).map((chordId, i) => (
        <ChordBlock barId={barId} chordId={chordId} key={i} />
      ))}
    </PureBarBlock>
  )
}
