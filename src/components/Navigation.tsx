import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { IconType } from 'react-icons'
import { PiMusicNoteSimple, PiPencilLine } from 'react-icons/pi'
import { Paths } from './paths'
import { useLocation } from 'react-router'
import { useActiveProgression } from '../modelHooks'

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

const activeStyle = css`
  background: #ffffff30;
  color: #fff;
`

type TabDescriptor = {
  path: 'score' | 'editor'
  label: string
  icon: IconType
}

const TABS: TabDescriptor[] = [
  {
    icon: PiPencilLine,
    label: 'Editor',
    path: 'editor',
  },
  {
    icon: PiMusicNoteSimple,
    label: 'Score',
    path: 'score',
  },
]

export const Navigation: FC = () => {
  const { pathname } = useLocation()
  const progression = useActiveProgression()
  return (
    <div className={tabContainerStyle}>
      {TABS.map(({ path, icon: Icon, label }) => {
        const href = Paths[path](progression!.id)
        const cls = pathname === href ? cx(tabStyle, activeStyle) : tabStyle
        return (
          <a href={`#${href}`} className={cls} key={path}>
            <Icon /> {label}
          </a>
        )
      })}
    </div>
  )
}
