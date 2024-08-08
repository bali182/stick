import { FC, useEffect, useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  rectSortingStrategy,
  arrayMove,
} from '@dnd-kit/sortable'
import { BarBlock } from './BarBlock'
import { isNil } from '../../model/isNil'
import { useActiveProgression } from '../../modelHooks'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { nanoid } from 'nanoid'
import { Bar } from '../../model/types'
import { barsSlice } from '../../state/bars'
import { progressionsSlice } from '../../state/progressions'
import { AddBarBlock } from './pure/ChordChart/AddBarBlock'
import { BarDragFeedback } from './pure/BarBlock/BarDragFeedback'
import { PureChordChart } from './pure/ChordChart/PureChordChart'
import { EditorIds } from './EditorIds'

export const ChordChart: FC = () => {
  const progression = useActiveProgression()

  const dispatch = useDispatch<AppDispatch>()

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const [activeId, setActiveId] = useState<string>()
  const [newBarId, setNewBarId] = useState<string>()

  useEffect(() => {
    if (!isNil(newBarId)) {
      document.getElementById(EditorIds.addChordButton(newBarId))?.focus()
      setNewBarId(undefined)
    }
  }, [newBarId])

  const onAddBar = () => {
    if (isNil(progression)) {
      return
    }
    const bar: Bar = { id: nanoid(), chords: [] }
    dispatch(barsSlice.actions.createBar({ bar }))
    dispatch(
      progressionsSlice.actions.updateProgression({
        progressionId: progression.id,
        updates: { bars: [...progression.bars, bar.id] },
      }),
    )
    setNewBarId(bar.id)
  }

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (isNil(progression) || isNil(over) || active.id === over.id) {
      return
    }

    const oldBars = progression.bars
    const oldIndex = oldBars.indexOf(active.id as string)
    const newIndex = oldBars.indexOf(over.id as string)
    const newBars = arrayMove(progression.bars, oldIndex, newIndex)

    dispatch(
      progressionsSlice.actions.updateProgression({
        progressionId: progression.id,
        updates: { ...progression, bars: newBars },
      }),
    )
  }

  const onDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  if (isNil(progression)) {
    return null
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={onDragEnd}
      onDragStart={onDragStart}
    >
      <SortableContext items={progression.bars} strategy={rectSortingStrategy}>
        <PureChordChart>
          {progression.bars.map((barId, i) => (
            <BarBlock barId={barId} count={i + 1} key={barId} />
          ))}
          <AddBarBlock onClick={onAddBar} />
        </PureChordChart>
      </SortableContext>
      <DragOverlay>
        {activeId ? <BarDragFeedback id={activeId} /> : null}
      </DragOverlay>
    </DndContext>
  )
}
