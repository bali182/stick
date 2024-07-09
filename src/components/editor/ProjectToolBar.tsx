import { css } from '@emotion/css'
import { FC, useState } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { RiBrushLine } from 'react-icons/ri'
import { PiGear } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../../state/types'
import {
  ClearTransitionsAction,
  FillTransitionsAction,
} from '../../state/actionTypes'
import { ProgressionsStatus } from '../../model/types'
import { getProgressionStatus } from '../../state/selectors/getProgressionStatus'
import { SettingsModal } from '../settings/SettingsModal'

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

export type ProjectToolBarProps = {
  progressionId: string
}

export const ProjectToolBar: FC<ProjectToolBarProps> = ({ progressionId }) => {
  const [isSettingsOpen, setSettingsOpen] = useState(false)

  const { canAutoFillTransitions, canClearTransitions } = useSelector<
    AppState,
    ProgressionsStatus
  >((state) => getProgressionStatus(state, progressionId))

  const dispatch = useDispatch()

  const onAutoAddTransitions = () => {
    const action: FillTransitionsAction = {
      type: 'global/fillTransitions',
      payload: { progressionId },
    }
    dispatch(action)
  }

  const onClearTransitions = () => {
    const action: ClearTransitionsAction = {
      type: 'global/clearTransitions',
      payload: { progressionId },
    }
    dispatch(action)
  }

  const onOpenSettings = () => setSettingsOpen(true)
  const onCloseSettings = () => setSettingsOpen(false)

  return (
    <>
      {isSettingsOpen && (
        <SettingsModal onBackdropClick={onCloseSettings} onClose={onCloseSettings} />
      )}
      <div className={toolbarStyle}>
        <div className={buttonContainerStyle}>
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
          <button className={buttonStyle} onClick={onOpenSettings}>
            <PiGear className={buttonIconStyle} />
            Settings
          </button>
        </div>
      </div>
    </>
  )
}
