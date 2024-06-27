import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { RiFootprintFill } from 'react-icons/ri'
import { PiPencilLine } from 'react-icons/pi'
import { RiMusicLine } from 'react-icons/ri'
import { IconType } from 'react-icons'
import { useLocation } from 'react-router'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 14px 50px;
`

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
  font-weight: bold;
`

const tabContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 16px;
`

const tabStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  padding: 8px 16px;
  color: #ddd;
  font-size: 1.4em;
  background: transparent;
  transition: color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #ffffff30;
    color: #fff;
  }

  * {
    &:hover,
    &:active,
    &:visited {
      text-decoration: none !important;
    }
  }

  &:hover,
  &:active,
  &:visited {
    text-decoration: none !important;
  }
`

const activeTabStyle = css`
  background: #ffffff30;
  color: #fff;
`

type TabDescriptor = {
  path: string
  matches: string[]
  label: string
  icon: IconType
}

const TABS: TabDescriptor[] = [
  {
    icon: PiPencilLine,
    label: 'Editor',
    matches: ['/', '/editor'],
    path: '/editor',
  },
  {
    icon: RiMusicLine,
    label: 'Tab & Sheet music',
    matches: ['/sheet-music'],
    path: '/sheet-music',
  },
]

export const Toolbar: FC = () => {
  const { pathname } = useLocation()
  return (
    <div className={toolbarStyle}>
      <a className={logoBlockStyle} href="#/">
        <RiFootprintFill className={titleIconStyle} />
        <span className={logoTextStyle}>
          <h1 className={titleStyle}>Stick</h1>
          <h2 className={subTitleStyle}>helps you walk.</h2>
        </span>
      </a>

      {/* <div className={titleStyle}>
        <span>Stick</span>
      </div> */}
      <div className={tabContainerStyle}>
        {TABS.map(({ matches, path, icon: Icon, label }) => {
          const className = matches.includes(pathname)
            ? cx(tabStyle, activeTabStyle)
            : tabStyle
          return (
            <a href={`/#${path}`} className={className} key={path}>
              <Icon /> {label}
            </a>
          )
        })}
      </div>
    </div>
  )
}
