import { FC, useEffect, useState } from 'react'
import { ChordBlock } from './ChordBlock'
import { useDispatch } from 'react-redux'
import { ChordSymbol } from '../../model/types'
import { nanoid } from 'nanoid'
import { barsSlice } from '../../state/bars'
import { chordsSlice } from '../../state/chords'
import { AppDispatch } from '../../state/store'
import { useActiveProgression, useBar, useChordAt } from '../../modelHooks'
import { PureBarBlock } from './pure/BarBlock/PureBarBlock'
import { isNil } from '../../model/isNil'
import { MissingBarBlock } from './pure/BarBlock/MissingBarBlock'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import { EditorIds } from './EditorIds'
import { cloneBar, deleteBars } from '../../state/actionCreators'

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

  const [newChordId, setNewChordId] = useState<string>()

  useEffect(() => {
    if (!isNil(newChordId)) {
      document.getElementById(EditorIds.chordAndTypeInput(newChordId))?.focus()
      setNewChordId(undefined)
    }
  }, [newChordId])

  const onDeleteBar = () => {
    dispatch(deleteBars({ barIds: [barId] }))
  }

  const onAddFirstChord = () => {
    if (!isNil(firstChord) || isNil(bar)) {
      return
    }
    const chord: ChordSymbol = {
      id: nanoid(),
      name: 'C',
      type: 'MAJOR',
      root: 'C2',
    }
    dispatch(chordsSlice.actions.createChord({ chord }))
    dispatch(
      barsSlice.actions.updateBar({
        barId,
        updates: { chords: [...bar.chords, chord.id] },
      }),
    )
    setNewChordId(chord.id)
  }

  const onAddSecondChord = () => {
    if (isNil(firstChord) || isNil(bar)) {
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

    dispatch(
      chordsSlice.actions.updateChord({
        chordId: updatedChord.id,
        updates: updatedChord,
      }),
    )
    dispatch(chordsSlice.actions.createChord({ chord: secondChord }))
    dispatch(
      barsSlice.actions.updateBar({
        barId,
        updates: { chords: [...bar.chords, secondChord.id] },
      }),
    )
    setNewChordId(secondChord.id)
  }

  const onClone = () => {
    if (isNil(progression)) {
      return
    }
    dispatch(cloneBar({ progressionId: progression.id, barId }))
  }

  if (isNil(bar)) {
    return <MissingBarBlock onDelete={onDeleteBar} />
  }

  return (
    <PureBarBlock
      barId={barId}
      count={count}
      onAddFirst={onAddFirstChord}
      onAddSecond={onAddSecondChord}
      onDelete={onDeleteBar}
      onClone={onClone}
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
