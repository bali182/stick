import { css } from '@emotion/css'
import { FC, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { RiBrushLine } from 'react-icons/ri'
import { PiGear, PiNoteLight } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../state/types'
import {
  ClearTransitionsAction,
  FillTransitionsAction,
} from '../../state/actionTypes'
import { ChordProgression, ProgressionsStatus } from '../../model/types'
import { getProgressionStatus } from '../../state/selectors/getProgressionStatus'
import { SettingsModal } from '../settings/SettingsModal'
import { isNil } from '../../model/isNil'
import { configSlice } from '../../state/config'
import { progressionsSlice } from '../../state/progressions'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { ProgressionSelector } from './ProgressionListSelector'
import { NewProgressionModal } from './NewProgressionModal'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  background-color: #ffffff20;
  height: 70px;
  width: 100%;
  padding: 0px 50px;
`

const buttonContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const buttonStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffffdd;
  padding: 8px 16px;
  gap: 6px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 6px;
  background-color: transparent;
  &:hover {
    color: #fff;
    background-color: #ffffff20;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

const buttonIconStyle = css`
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

export const ProjectToolBar: FC = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false)
  const [isProgressionsOpen, setProgressionsOpen] = useState(false)
  const [isProgressionModalOpen, setProgressionModalOpen] = useState(false)

  const progression = useSelector(getActiveProgression)

  const { canAutoFillTransitions, canClearTransitions } = useSelector<
    AppState,
    ProgressionsStatus
  >((state) => getProgressionStatus(state))

  const dispatch = useDispatch()

  const onAutoAddTransitions = () => {
    const action: FillTransitionsAction = {
      type: 'global/fillTransitions',
      payload: { progressionId: progression?.id! },
    }
    dispatch(action)
  }

  const onClearTransitions = () => {
    const action: ClearTransitionsAction = {
      type: 'global/clearTransitions',
      payload: { progressionId: progression?.id! },
    }
    dispatch(action)
  }

  const onOpenSettings = () => setSettingsOpen(true)
  const onCloseSettings = () => setSettingsOpen(false)
  const onOpenProgressions = () => setProgressionsOpen(true)
  const onCloseProgressions = () => setProgressionsOpen(false)
  const onOpenProgressionModal = () => setProgressionModalOpen(true)
  const onCloseProgressionModal = () => setProgressionModalOpen(false)

  return (
    <>
      {isSettingsOpen && <SettingsModal onClose={onCloseSettings} />}
      {isProgressionModalOpen && (
        <NewProgressionModal
          onClose={onCloseProgressionModal}
          canClose={true}
        />
      )}
      <div className={toolbarStyle}>
        <div className={buttonContainerStyle}>
          <Popover
            isOpen={isProgressionsOpen}
            onClickOutside={onCloseProgressions}
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
                  <ProgressionSelector
                    setOpen={setProgressionsOpen}
                    add={onOpenProgressionModal}
                  />
                </div>
              </ArrowContainer>
            )}
          >
            <button className={buttonStyle} onClick={onOpenProgressions}>
              <PiNoteLight className={buttonIconStyle} />
              {progression?.name ?? ''}
            </button>
          </Popover>

          <button
            className={buttonStyle}
            disabled={!canAutoFillTransitions}
            onClick={onAutoAddTransitions}
          >
            <RiBrushLine className={buttonIconStyle} />
            Fill transitions
          </button>

          <button
            className={buttonStyle}
            disabled={!canClearTransitions}
            onClick={onClearTransitions}
          >
            <FiTrash2 className={buttonIconStyle} />
            Clear transitions
          </button>
        </div>
        <div className={buttonContainerStyle}>
          <button
            disabled={isNil(progression?.id)}
            className={buttonStyle}
            onClick={onOpenSettings}
          >
            <PiGear className={buttonIconStyle} />
            Settings
          </button>
        </div>
      </div>
    </>
  )
}
