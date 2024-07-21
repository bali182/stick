import { css } from '@emotion/css'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'
import { progressionsSlice } from '../../state/progressions'
import { FiTrash2 } from 'react-icons/fi'
import { PageProps } from './types'
import { isNil } from '../../model/isNil'

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  padding: 14px;
  pointer-events: auto;
`

const labelStyle = css`
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 2px;
  pointer-events: auto;
`

const descriptionStyle = css`
  font-size: 0.8em;
  margin-bottom: 10px;
  color: #ffffffaa;
`

const containerStyle = css`
  display: flex;
  flex-direction: row;
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
  background-color: #ff000050;
  &:hover {
    color: #fff;
    background-color: #ff000060;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

export const DangerPage: FC<PageProps> = ({ onClose }) => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useSelector(getActiveProgression)

  const deleteProgression = () => {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.deleteProgression({
        progressionId: progression.id,
      }),
    )
    onClose()
  }

  return (
    <div className={sectionStyle}>
      <label className={labelStyle}>Delete chord progression</label>
      <span className={descriptionStyle}>
        Pressing this button will permanently delete this chord progression.
      </span>
      <div className={containerStyle}>
        <button className={buttonStyle} onClick={deleteProgression}>
          <FiTrash2 />
          Permanently delete progression
        </button>
      </div>
    </div>
  )
}
