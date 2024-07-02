import { css } from '@emotion/css'
import { FC } from 'react'
import { PiMusicNoteSimpleFill } from 'react-icons/pi'

const wrapperStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0.9;
  position: absolute;
  height: 100%;
  top: 0px;
  right: 40px;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
`
const alphaTabLogoStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const logoStyle = css`
  font-size: 2.6em;
  color: #fff;
`

const alphaStyle = css`
  font-size: 2em;
  color: #fff;
`
const tabStyle = css`
  font-size: 2em;
  color: #ffffff88;
`

const renderedByStyle = css`
  font-size: 0.85em;
  color: #ffffff66;
`

export const AlphaTabLogo: FC = () => {
  return (
    <a href="https://alphatab.net">
      <span className={wrapperStyle}>
        <span className={renderedByStyle}>Tabs & score rendered by:</span>
        <span className={alphaTabLogoStyle}>
          <PiMusicNoteSimpleFill className={logoStyle} />
          <span>
            <span className={alphaStyle}>alpha</span>
            <span className={tabStyle}>Tab</span>
          </span>
        </span>
      </span>
    </a>
  )
}
