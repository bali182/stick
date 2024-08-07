import { FC, useState } from 'react'
import {
  ChordSymbol,
  ChordType,
  HasId,
  Note,
  PitchedNote,
  Transition,
} from '../../model/types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { FiTrash2 } from 'react-icons/fi'
import { isNil } from '../../model/isNil'
import { chordsSlice } from '../../state/chords'
import { barsSlice } from '../../state/bars'
import { getChordSymbolName } from '../../model/getChordSymbolName'
import { NOTE_COLORS } from '../colors'
import {
  useActiveProgression,
  useBar,
  useChord,
  useNextChord,
  usePossibleRoots,
  useTransition,
  useTransitionCategories,
} from '../../modelHooks'
import { PureChordBlock } from './pure/ChordBlock/PureChordBlock'
import {
  ChordBlockContent,
  ChordBlockFooter,
  ChordBlockHeader,
  ChordBlockIcon,
  Spacer,
} from './pure/ChordBlock/primitives'
import { RootPicker } from './pure/ChordBlock/RootPicker'
import { NoteCountPicker } from './pure/ChordBlock/NoteCountPicker'
import { ChordNameAndType } from './pure/ChordBlock/ChordNameAndType'
import { getPossiblePitches } from '../../model/utils'
import { getNoteRange } from '../../model/getNoteRange'
import { TransitionButton } from './pure/ChordBlock/TransitionButton'
import { MissingChordBlock } from './pure/ChordBlock/MissingChordBlock'
import { canTransition } from '../../model/canTransition'

export type ChordBlockProps = {
  barId: string
  chordId: string
}

export const ChordBlock: FC<ChordBlockProps> = ({ barId, chordId }) => {
  const progression = useActiveProgression()
  const tuning = progression?.tuning ?? []
  const chord = useChord(chordId)
  const bar = useBar(barId)
  const nextChord = useNextChord(progression?.id, barId, chordId)
  const possibleRoots = usePossibleRoots(tuning, chord?.name)
  const noteCnt = chord?.noteCount ?? progression?.noteCount
  const categories = useTransitionCategories(tuning, noteCnt, chord, nextChord)
  const transition = useTransition(chord?.transitionId)

  const dispatch = useDispatch<AppDispatch>()

  const [isHovered, setHovered] = useState(false)

  const onChordChange = (changes: Partial<ChordSymbol>) => {
    if (isNil(chord)) {
      return
    }
    const update: HasId & Partial<ChordSymbol> = { id: chord.id, ...changes }
    dispatch(chordsSlice.actions.updateChord({ chord: update }))
  }

  const onNoteCountChange = (noteCount: number | undefined) => {
    onChordChange({
      noteCount,
      ...(!isNil(transition) && noteCount !== transition?.steps.length
        ? { transitionId: undefined }
        : {}),
    })
  }

  const onRootChange = (root: PitchedNote) => {
    if (isNil(chord)) {
      return
    }

    const updated: ChordSymbol = { ...chord, root }
    if (
      !isNil(transition) &&
      !canTransition(updated, nextChord, tuning, transition, noteCnt)
    ) {
      updated.transitionId = undefined
    }
    onChordChange(updated)
  }

  const onTransitionChange = (transition?: Transition) => {
    onChordChange({ transitionId: transition?.id })
  }

  const onNoteAndTypeChange = (name: Note, type: ChordType) => {
    const roots = getPossiblePitches(name, getNoteRange(tuning))
    const root = roots.includes(chord?.root!) ? chord?.root! : roots[0]!
    onChordChange({ name, type, root })
  }

  const onChordDeleted = () => {
    if (!isNil(bar)) {
      const otherChords = bar.chords.filter((id) => id !== chordId)
      otherChords.forEach((id) => {
        dispatch(
          chordsSlice.actions.updateChord({
            chord: { id, noteCount: undefined },
          }),
        )
      })
    }
    dispatch(barsSlice.actions.removeChords({ barId, chordIds: [chordId] }))
    dispatch(chordsSlice.actions.deleteChord({ chordId }))
  }

  const color = chord?.name ? NOTE_COLORS[chord?.name] : 'transparent'

  if (isNil(chord)) {
    return <MissingChordBlock onDelete={onChordDeleted} />
  }

  return (
    <PureChordBlock color={color} onHoverStatusChanged={setHovered}>
      <ChordBlockHeader>
        <RootPicker
          root={chord.root}
          onChange={onRootChange}
          values={possibleRoots}
        />
        <NoteCountPicker
          progressionNoteCount={progression?.noteCount}
          noteCount={chord.noteCount}
          onChange={onNoteCountChange}
        />
      </ChordBlockHeader>
      <ChordBlockContent>
        <ChordNameAndType
          chord={getChordSymbolName(chord)}
          onChange={onNoteAndTypeChange}
        />
      </ChordBlockContent>
      <ChordBlockFooter>
        <Spacer />
        {nextChord && (
          <TransitionButton
            categories={categories}
            transition={transition}
            onChange={onTransitionChange}
          />
        )}
        <ChordBlockIcon
          icon={FiTrash2}
          onClick={onChordDeleted}
          visible={isHovered}
        />
      </ChordBlockFooter>
    </PureChordBlock>
  )
}
