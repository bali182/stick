import { FC, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import {
  ChordProgression,
  ChordSymbol,
  Transition,
  TransitionCategory,
} from '../../model/types'
import { chordsSlice } from '../../state/chords'
import { getNextChord } from '../../state/selectors/getNextChord'
import { TRANSITION_CATEGORIES } from '../../../generated/transitions'
import { canTransition } from '../../model/canTransition'
import { filterCategoriesByTransitions } from '../../model/filterCategoriesByTransitions'
import { AppState, ConfigState } from '../../state/types'
import { progressionsSlice } from '../../state/progressions'
import { ListSelector } from './ListSelector'

export type TransitionSelectorListProps = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  barId: string
  chordId: string
}

const getChildren = (category: TransitionCategory) => category.transitions
const getCategoryKey = (category: TransitionCategory) => category.id
const getCategoryLabel = (category: TransitionCategory) => category.name
const getItemKey = (item: Transition) => item.id
const getItemLabel = (item: Transition) => item.name
const matches = (item: Transition, search: string) =>
  item.name.toLowerCase().includes(search.toLowerCase())
const noHitsLabel =
  'No transitions found! Consider changing the root notes, your preferences, or search criteria'

export const TransitionSelectorList: FC<TransitionSelectorListProps> = ({
  setOpen,
  chordId,
  barId,
}) => {
  const { progressionId } = useSelector<AppState, ConfigState>(
    (state) => state.config,
  )
  const progression = useSelector<AppState, ChordProgression>(
    (state) =>
      progressionsSlice.selectors.getProgression(state, progressionId!)!,
  )
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )!
  const tuning = progression.tuning
  const nextChord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId!, barId, chordId),
  )!
  const categories = useMemo<TransitionCategory[]>(() => {
    return filterCategoriesByTransitions(TRANSITION_CATEGORIES, (transition) =>
      canTransition(chord, nextChord, tuning, transition),
    )
  }, [chord, nextChord, tuning])

  const dispatch = useDispatch<AppDispatch>()

  const onItemClick = ({ id }: Transition) => {
    dispatch(
      chordsSlice.actions.updateChord({
        chord: { id: chordId, transitionId: id },
      }),
    )
    setOpen(false)
  }

  return (
    <ListSelector<TransitionCategory, Transition>
      categories={categories}
      onItemClick={onItemClick}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      matches={matches}
      noHitsLabel={noHitsLabel}
    />
  )
}
