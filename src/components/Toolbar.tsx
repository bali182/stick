import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { PiMusicNoteSimple, PiPencilLine } from 'react-icons/pi'
import { IconType } from 'react-icons'
import { useLocation } from 'react-router'
import { StickLogo } from './StickLogo'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 14px 50px;
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
    icon: PiMusicNoteSimple,
    label: 'Tab & Sheet music',
    matches: ['/sheet-music'],
    path: '/sheet-music',
  },
]

export const Toolbar: FC = () => {
  const { pathname } = useLocation()
  return (
    <div className={toolbarStyle}>
      <StickLogo />
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
