import { css } from '@emotion/css'
import { FC } from 'react'
import { RiFootprintFill } from 'react-icons/ri'

const logoBlockStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-right: 60px;
  &:hover,
  &:active,
  &:visited {
    text-decoration: none;
  }
`

const logoTextStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const titleIconStyle = css`
  color: #fff;
  font-size: 3.4em;
`

const titleStyle = css`
  color: #fff;
  font-size: 2.4em;
  font-weight: bold;
  line-height: 90%;
  margin: 0px;
`

const subTitleStyle = css`
  color: #ffffff99;
  font-size: 0.8em;
  line-height: 90%;
  font-weight: normal;
`

export const StickLogo: FC = () => {
  return (
    <a className={logoBlockStyle} href="#/">
      <RiFootprintFill className={titleIconStyle} />
      <span className={logoTextStyle}>
        <h1 className={titleStyle}>Stick</h1>
        <h2 className={subTitleStyle}>helps you walk.</h2>
      </span>
    </a>
  )
}
