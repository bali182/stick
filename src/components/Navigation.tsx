import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { PiMusicNoteSimple, PiPencilLine } from 'react-icons/pi'
import { Paths } from './paths'
import { useLocation } from 'react-router'
import { useActiveProgression } from '../modelHooks'
import { Link } from 'react-router-dom'
import { isNil } from '../model/isNil'
import { useTranslation } from 'react-i18next'

const tabContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  flex: 1;
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

function getTabStyle(page: 'editor' | 'score', pathname: string): string {
  const segments = pathname.split('/')
  const last = segments[segments.length - 1]
  return last === page ? cx(tabStyle, activeStyle) : tabStyle
}

export const Navigation: FC = () => {
  const { pathname } = useLocation()
  const progression = useActiveProgression()
  const { t } = useTranslation()
  if (isNil(progression)) {
    return null
  }

  const editorCls = getTabStyle('editor', pathname)
  const scoreCls = getTabStyle('score', pathname)

  return (
    <div className={tabContainerStyle}>
      <Link to={Paths.editor(progression.id)} className={editorCls}>
        <PiPencilLine /> {t('Navigation.Editor')}
      </Link>
      <Link to={Paths.score(progression.id)} className={scoreCls}>
        <PiMusicNoteSimple /> {t('Navigation.Score')}
      </Link>
    </div>
  )
}

export const NavigationPlaceHolder: FC = () => {
  return <div className={tabContainerStyle}>&nbsp;</div>
}
