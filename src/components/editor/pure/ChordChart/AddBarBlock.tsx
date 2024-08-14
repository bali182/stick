import { css } from '@emotion/css'
import { FC } from 'react'
import { FiPlusSquare } from 'react-icons/fi'
import { EditorIds } from '../../EditorIds'
import { useTranslation } from 'react-i18next'

const barBlockStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px dashed #ffffff30;
  background: transparent;
  height: 183px;
  overflow: hidden;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #ffffff10;
    border-color: #ffffff60;
  }
`

const addButtonStyle = css`
  font-weight: bold;
  color: #ffffffaa;
  font-size: 2em;
  text-align: center;
  transition: color 0.2s ease;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 10px;
  margin: 10px;
  padding: 14px;
  width: 100%;
  height: 100%;
  &:hover {
    color: #ffffffcc;
  }
`

const addBarIconStyle = css`
  flex-shrink: 0;
`

export type AddBarBlockProps = {
  onClick: () => void
}

export const AddBarBlock: FC<AddBarBlockProps> = ({ onClick }) => {
  const { t } = useTranslation()
  return (
    <button
      className={barBlockStyle}
      onClick={onClick}
      id={EditorIds.addBarButton}
    >
      <div className={addButtonStyle}>
        <FiPlusSquare className={addBarIconStyle} /> {t('Progression.Bar')}
      </div>
    </button>
  )
}
