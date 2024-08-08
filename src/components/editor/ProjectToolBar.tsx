import { css, cx } from '@emotion/css'
import { ChangeEvent, FC, useState, FocusEvent, KeyboardEvent } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { RiBrushLine } from 'react-icons/ri'
import { PiGear, PiArrowLeftBold } from 'react-icons/pi'
import { useDispatch } from 'react-redux'
import {
  ClearTransitionsAction,
  FillTransitionsAction,
} from '../../state/actionTypes'
import { SettingsModal } from '../settings/SettingsModal'
import { isNil } from '../../model/isNil'
import { NewProgressionModal } from './NewProgressionModal'
import { useActiveProgression, useProgressionStatus } from '../../modelHooks'
import { Paths } from '../paths'
import { progressionsSlice } from '../../state/progressions'
import { AutoWidthInput } from '../AutoWidthInput'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff20;
  height: 70px;
  width: 100%;
  padding: 0px 60px;
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

const backButtonStyle = cx(
  buttonStyle,
  css`
    padding: 0px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
  `,
)

const nameInputStyle = css`
  display: inline;
  font-weight: 600;
  color: #ffffffee;
  padding: 8px 16px;
  font-size: 1em;
  text-align: center;
  text-shadow: 0px 0px 0px transparent;
  transition: text-shadow 0.2s ease, color 0.2s ease;
  user-select: none;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 20px;
  background-color: #ffffff10;
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }

  &:hover {
    color: #ffffff;
    background-color: #ffffff30;
  }
  &:focus {
    color: #000000;
    background-color: #ffffff;
  }
`

const buttonIconStyle = css`
  font-size: 1.2em;
`

export const ProjectToolBar: FC = () => {
  const [isSettingsOpen, setSettingsOpen] = useState(false)
  const [isProgressionModalOpen, setProgressionModalOpen] = useState(false)

  const progression = useActiveProgression()

  const { canAutoFillTransitions, canClearTransitions } = useProgressionStatus(
    progression?.id!,
  )

  const dispatch = useDispatch()

  const onAutoAddTransitions = () => {
    if (isNil(progression)) {
      return
    }
    const action: FillTransitionsAction = {
      type: 'global/fillTransitions',
      payload: { progressionId: progression.id },
    }
    dispatch(action)
  }

  const onClearTransitions = () => {
    if (isNil(progression)) {
      return
    }
    const action: ClearTransitionsAction = {
      type: 'global/clearTransitions',
      payload: { progressionId: progression.id },
    }
    dispatch(action)
  }

  const onNameChanged = (e: ChangeEvent<HTMLInputElement>) => {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.updateProgression({
        progressionId: progression.id,
        updates: { name: e.target.value },
      }),
    )
  }

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      (e.target as HTMLInputElement).blur()
    }
  }

  const onNameFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const onOpenSettings = () => setSettingsOpen(true)
  const onCloseSettings = () => setSettingsOpen(false)
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
          <a className={backButtonStyle} href={Paths.home()}>
            <PiArrowLeftBold className={buttonIconStyle} />
          </a>
          <AutoWidthInput
            type="text"
            value={progression?.name ?? ''}
            className={nameInputStyle}
            minLength={1}
            onChange={onNameChanged}
            onFocus={onNameFocus}
            onKeyDown={onKeyDown}
          />
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
