import { css } from '@emotion/css'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { FiTrash2 } from 'react-icons/fi'
import { PageProps } from './types'
import { isNil } from '../../model/isNil'
import { useActiveProgression } from '../../modelHooks'
import { useNavigate } from 'react-router'
import { Paths } from '../paths'
import { deleteProgressions } from '../../state/actionCreators'
import { useTranslation } from 'react-i18next'

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

export const DangerPage: FC<PageProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useActiveProgression()
  const navigate = useNavigate()
  const { t } = useTranslation()

  const onDeleteProgression = () => {
    if (isNil(progression)) {
      return
    }
    dispatch(deleteProgressions({ progressionIds: [progression.id] }))
    navigate(Paths.home())
  }

  return (
    <div className={sectionStyle}>
      <label className={labelStyle}>
        {t('Settings.DeleteProgressionName')}
      </label>
      <span className={descriptionStyle}>
        {t('Settings.DeleteProgressionDescription')}
      </span>
      <div className={containerStyle}>
        <button className={buttonStyle} onClick={onDeleteProgression}>
          <FiTrash2 />
          {t('Settings.DeleteProgressionButton')}
        </button>
      </div>
    </div>
  )
}
