import { FC } from 'react'
import { Popover } from 'react-tiny-popover'
import { PopoverContent } from './PopoverContent'
import { TransitionEditor } from './TransitionEditor'
import { FiTrash2 } from 'react-icons/fi'
import { RiFootprintFill } from 'react-icons/ri'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { getNextChord } from '../../state/getNextChord'
import { AppDispatch, AppState } from '../../state/store'
import { ChordSymbol, PitchedNote, Transition } from '../../model/types'
import { getChord, updateChord } from '../../state/chords'
import { getTuning } from '../../state/config'
import { TRANSITION_MAP } from '../../model/constants'
import { isNil } from '../../model/isNil'

export type TransitionButtonProps = {
  isOpen: boolean
  setOpen: (open: boolean) => void
  progressionId: string
  barId: string
  chordId: string
}

const transitionButtonStyle = css`
  color: #ffffffdd;
  border-radius: 6px;
  cursor: pointer;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  &:hover {
    background-color: #ffffff40;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

const addTransitionIconStyle = css`
  color: #fff;
  cursor: pointer;
  position: relative;
  display: inline;
  top: 3px;
`

const transitionNameStyle = css`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 4px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: flex;
  font-size: 1.2em;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ffffff40;
  }
`

const removeBtnStyle = css`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  padding: 4px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ffffff40;
  }
`

const binIconStyle = css`
  position: relative;
  top: -1px;
  font-size: 1em;
`

const walkStyle = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 10px;
  font-size: 1.2em;
`

export const TransitionButton: FC<TransitionButtonProps> = ({
  isOpen,
  setOpen,
  chordId,
  progressionId,
  barId,
}) => {
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getChord(state, chordId),
  )!
  const tuning = useSelector<AppState, PitchedNote[]>(getTuning)
  const nextChord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId, barId, chordId),
  )!
  const transition = chord?.transitionId
    ? TRANSITION_MAP[chord.transitionId]
    : undefined

  const dispatch = useDispatch<AppDispatch>()

  const close = () => setOpen(false)
  const toggle = () => setOpen(!isOpen)
  const onTransitionChange = ({ id }: Transition) => {
    dispatch(updateChord({ chord: { id: chordId, transitionId: id } }))
    close()
  }
  const onTransitionDeleted = () => {
    dispatch(updateChord({ chord: { id: chordId, transitionId: undefined } }))
    close()
  }

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={close}
      clickOutsideCapture={true}
      positions={['bottom', 'right', 'left']}
      content={(props) => (
        <PopoverContent {...props}>
          <TransitionEditor
            from={chord}
            to={nextChord}
            tuning={tuning}
            transitionId={chord.transitionId}
            onChange={onTransitionChange as any}
          />
        </PopoverContent>
      )}
    >
      <div>
        {isNil(transition) && (
          <div className={transitionButtonStyle} onClick={toggle}>
            <div className={walkStyle}>
              <RiFootprintFill className={addTransitionIconStyle} /> Walk
            </div>
          </div>
        )}
        {!isNil(transition) && (
          <div className={transitionButtonStyle}>
            <div className={transitionNameStyle} onClick={toggle}>
              {transition.name}
            </div>
            <div className={removeBtnStyle} onClick={onTransitionDeleted}>
              <FiTrash2 className={binIconStyle} />
            </div>
          </div>
        )}
      </div>
    </Popover>
  )
}
