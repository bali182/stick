import { css } from '@emotion/css'
import { FC, HTMLProps } from 'react'

export type PureBarBlockProps = HTMLProps<HTMLDivElement> & {}

const feedbackStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 10px;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  box-shadow: none;
  height: 183px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #ffffff35;
  }
  cursor: move;
`

export const BarDragFeedback: FC<PureBarBlockProps> = ({}) => {
  return <div className={feedbackStyle}></div>
}
