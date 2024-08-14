import { css } from '@emotion/css'
import { FC } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { buttonStyle } from '../../../commonStyles'
import { useTranslation } from 'react-i18next'

const missingChordBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 10px;
  height: 138px;
  padding: 12px 14px 8px 14px;
  gap: 10px;
  border: 2px dashed #ffffff60;
  background-color: #ffffff20;
  color: #ffffffee;
`

const textStyle = css`
  text-align: center;
  font-size: 1em;
`

export type MissingChordBlockProps = {
  onDelete: () => void
}

export const MissingChordBlock: FC<MissingChordBlockProps> = ({ onDelete }) => {
  const { t } = useTranslation()
  return (
    <div className={missingChordBlockStyle}>
      <span className={textStyle}>{t('Errors.MissingChord')}</span>
      <button className={buttonStyle} onClick={onDelete}>
        <FiTrash2 />
        {t('Errors.Delete')}
      </button>
    </div>
  )
}
