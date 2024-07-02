import { css } from '@emotion/css'
import { FC } from 'react'

export type TabOverlayProps = {
  isVisible: boolean
}

const scoreOvelayStyle = css`
  /** Fill Parent */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1002;

  /* Blurry dark shade */
  backdrop-filter: blur(3px);
  background: rgba(0, 0, 0, 0.5);

  /** center content */
  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export const scoreOverlayContentStyle = css`
  margin-top: 20px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
  padding: 10px;
`

export const ScoreOverlay: FC<TabOverlayProps> = ({ isVisible }) => {
  if (!isVisible) {
    return null
  }
  return (
    <div className={scoreOvelayStyle}>
      <div className={scoreOverlayContentStyle}>Score is loading...</div>
    </div>
  )
}
