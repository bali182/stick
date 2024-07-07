import { FC, useState } from 'react'
import { Popover } from 'react-tiny-popover'
import { PopoverContent } from './PopoverContent'
import { FiTrash2 } from 'react-icons/fi'
import { RiFootprintFill } from 'react-icons/ri'
import { css } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { ChordSymbol } from '../../model/types'
import { chordsSlice } from '../../state/chords'
import { TRANSITION_MAP } from '../../model/constants'
import { isNil } from '../../model/isNil'
import { TransitionSelectorList } from './TransitionSelectorList'
import { AppState } from '../../state/types'

export type TransitionButtonProps = {
  progressionId: string
  barId: string
  chordId: string
}

const transitionButtonStyle = css`
  color: #ffffffdd;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  border: none;
  background-color: #ffffff30;
  &:hover {
    background-color: #ffffff40;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
`

const addTransitionIconStyle = css`
  color: #fff;
  cursor: pointer;
  position: relative;
  display: inline;
  top: 3px;
`

const transitionNameBtnStyle = css`
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
  border: none;
  color: #fff;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
`

const removeBtnStyle = css`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  flex-shrink: 0;
  padding: 4px 10px;
  display: flex;
  flex-direction: row;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
  &:hover {
    background-color: #ffffff40;
  }
`

const binIconStyle = css`
  position: relative;
  top: -1px;
  font-size: 1em;
  flex-shrink: 0;
`

const walkStyle = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 10px;
  font-size: 1.2em;
`

export const TransitionButton: FC<TransitionButtonProps> = ({
  chordId,
  progressionId,
  barId,
}) => {
  const [isOpen, setOpen] = useState(false)
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )!
  const transition = chord?.transitionId
    ? TRANSITION_MAP[chord.transitionId]
    : undefined

  const dispatch = useDispatch<AppDispatch>()
  const close = () => setOpen(false)
  const toggle = () => setOpen(!isOpen)
  const onTransitionDeleted = () => {
    dispatch(
      chordsSlice.actions.updateChord({
        chord: { id: chordId, transitionId: undefined },
      }),
    )
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
          <TransitionSelectorList
            isOpen={isOpen}
            setOpen={setOpen}
            barId={barId}
            chordId={chordId}
            progressionId={progressionId}
          />
        </PopoverContent>
      )}
    >
      <div>
        {isNil(transition) && (
          <button className={transitionButtonStyle} onClick={toggle}>
            <div className={walkStyle}>
              <RiFootprintFill className={addTransitionIconStyle} /> Walk
            </div>
          </button>
        )}
        {!isNil(transition) && (
          <div className={transitionButtonStyle}>
            <button className={transitionNameBtnStyle} onClick={toggle}>
              {transition.name}
            </button>
            <button className={removeBtnStyle} onClick={onTransitionDeleted}>
              <FiTrash2 className={binIconStyle} />
            </button>
          </div>
        )}
      </div>
    </Popover>
  )
}
