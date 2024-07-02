import { css } from '@emotion/css'
import { FC } from 'react'
import { PiWarning } from 'react-icons/pi'

const noScoreViewStyle = css`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
`
const warningIconStyle = css`
  font-size: 8em;
`
const titleStyle = css`
  font-size: 2.6em;
  font-weight: bold;
`

const fixesContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #ffffff20;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 1.1em;
  margin-top: 20px;
`
const howToFixStyle = css`
  font-size: 1.2em;
  font-weight: bold;
`

const listStyle = css`
  display: block;
  list-style-position: inside;
`

export const NoScoreView: FC = () => {
  return (
    <div className={noScoreViewStyle}>
      <PiWarning className={warningIconStyle} />
      <span className={titleStyle}>Score cannot be generated!</span>
      <div className={fixesContainerStyle}>
        <span className={howToFixStyle}>What's missing?</span>
        <ul className={listStyle}>
          <li>You should have at least 2 bars</li>
          <li>Each bar should have at least 1 chord in it</li>
          <li>Each chord should have a transition defined to the next chord</li>
        </ul>
      </div>
    </div>
  )
}
