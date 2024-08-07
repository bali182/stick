import { css } from '@emotion/css'
import { FC } from 'react'
import { FiTrash2 } from 'react-icons/fi'
import { buttonStyle } from '../../../commonStyles'

const missingBarBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  box-shadow: none;
  height: 183px;
  border: 2px dashed #ffffff60;
  background-color: #ffffff20;
  color: #ffffffee;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #ffffff25;
  }
`

const textStyle = css`
  text-align: center;
  font-size: 1em;
`

export type MissingBarBlockProps = {
  onDelete: () => void
}

export const MissingBarBlock: FC<MissingBarBlockProps> = ({ onDelete }) => {
  return (
    <div className={missingBarBlockStyle}>
      <span className={textStyle}>
        This bar is missing! This is most likely the result of a bug.
      </span>
      <button className={buttonStyle} onClick={onDelete}>
        <FiTrash2 />
        Delete
      </button>
    </div>
  )
}
