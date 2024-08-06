import { FC, useState } from 'react'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { FiTrash2 } from 'react-icons/fi'
import { RiFootprintFill } from 'react-icons/ri'
import { css, cx } from '@emotion/css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { ChordSymbol } from '../../model/types'
import { chordsSlice } from '../../state/chords'
import { TRANSITION_MAP } from '../../model/constants'
import { isNil } from '../../model/isNil'
import { TransitionSelectorList } from './TransitionSelectorList'
import { AppState } from '../../state/types'
import { useOnEscape } from './useOnEscape'
import { useChord } from '../../modelHooks'

export type TransitionButtonProps = {
  barId: string
  chordId: string
}

const containerStyle = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

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
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2em;
  border: none;
  color: #fff;
  max-width: 135px;
  min-width: 40px;
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

const sideButtonStyle = css`
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

const removeButtonStyle = cx(
  sideButtonStyle,
  css`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `,
)

const buttonIconStyle = css`
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

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 280px;
  height: 340px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const TransitionButton: FC<TransitionButtonProps> = ({
  chordId,
  barId,
}) => {
  const [isOpen, setOpen] = useState(false)
  const chord = useChord(chordId)
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

  useOnEscape(close, isOpen)

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={close}
      clickOutsideCapture={true}
      positions={['bottom', 'right', 'left']}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="#181818"
          arrowSize={10}
        >
          <div className={popoverStyle}>
            <TransitionSelectorList
              isOpen={isOpen}
              setOpen={setOpen}
              barId={barId}
              chordId={chordId}
            />
          </div>
        </ArrowContainer>
      )}
    >
      <div className={containerStyle}>
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
            {/* <button className={sideButtonStyle}>
              <FiRefreshCw className={buttonIconStyle} />
            </button> */}
            <button className={removeButtonStyle} onClick={onTransitionDeleted}>
              <FiTrash2 className={buttonIconStyle} />
            </button>
          </div>
        )}
      </div>
    </Popover>
  )
}
