import { css } from '@emotion/css'
import { ChangeEvent, FC, Fragment, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { RiSearchLine } from 'react-icons/ri'
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

export type TransitionSelectorListProps = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  barId: string
  chordId: string
}

const containerStyle = css`
  width: 100%;
  height: 300px;
  padding-bottom: 30px;
  overflow: auto;
`

const noHitsContainerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 14px;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff99;
`

const noHitsIconStyle = css`
  font-size: 3em;
`

const noHitsTextStyle = css`
  font-size: 0.9em;
  text-align: center;
`

const searchTextBoxStyle = css`
  display: block;
  padding-left: 14px;
  padding-right: 14px;
  margin: 14px;
  width: calc(100% - (14px * 2));
  background-color: #ffffff15;
  border: none;
  border-radius: 18px;
  height: 36px;
  font-size: 1em;
  color: #ffffff;
  outline: none;
  &:focus {
    outline: none;
    border: none;
    background-color: #ffffff30;
  }
`

const categoryTitleStyle = css`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding: 4px 10px;
  color: #ffffff99;
  background-color: #ffffff10;
`

const transitionItemStyle = css`
  padding: 6px 10px;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #ffffff25;
  }
`

export const TransitionSelectorList: FC<TransitionSelectorListProps> = ({
  setOpen,
  chordId,
  barId,
}) => {
  const [search, setSearch] = useState('')

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
  const useableCategories = useMemo<TransitionCategory[]>(() => {
    return filterCategoriesByTransitions(TRANSITION_CATEGORIES, (transition) =>
      canTransition(chord, nextChord, tuning, transition),
    )
  }, [chord, nextChord, tuning])

  const categories = useMemo<TransitionCategory[]>(() => {
    return filterCategoriesByTransitions(useableCategories, ({ name }) =>
      name.toLowerCase().includes(search.toLowerCase()),
    )
  }, [useableCategories, search])

  const dispatch = useDispatch<AppDispatch>()

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  const onItemClick =
    ({ id }: Transition) =>
    () => {
      dispatch(
        chordsSlice.actions.updateChord({
          chord: { id: chordId, transitionId: id },
        }),
      )
      setOpen(false)
    }

  return (
    <>
      <input
        type="text"
        className={searchTextBoxStyle}
        placeholder="Search..."
        value={search}
        onChange={onSearchChange}
      />
      <div className={containerStyle}>
        {categories.length === 0 && (
          <div className={noHitsContainerStyle}>
            <RiSearchLine className={noHitsIconStyle} />
            <span className={noHitsTextStyle}>
              No transitions found! Consider changing the root notes, your
              preferences, or search criteria
            </span>
          </div>
        )}
        {categories.map(({ id, name, transitions }) => {
          return (
            <Fragment key={id}>
              <div className={categoryTitleStyle}>{name}</div>
              {transitions.map((transition) => {
                return (
                  <div
                    key={transition.id}
                    className={transitionItemStyle}
                    onClick={onItemClick(transition)}
                  >
                    {transition.name}
                  </div>
                )
              })}
            </Fragment>
          )
        })}
      </div>
    </>
  )
}
