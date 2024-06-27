import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { RiFootprintFill } from 'react-icons/ri'
import { PiPencilLine } from 'react-icons/pi'
import { RiMusicLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../state/store'
import { ActiveTabState, getActiveTab, updateConfig } from '../state/config'
import { IconType } from 'react-icons'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 14px 50px;
`

const titleStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #fff;
  font-size: 2.4em;
  font-weight: bold;
  margin-right: 60px;
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
  &:hover {
    background: #ffffff30;
    color: #fff;
  }
`

const activeTabStyle = css`
  background: #ffffff30;
  color: #fff;
`

type TabDescriptor = {
  id: ActiveTabState
  label: string
  icon: IconType
}

const TABS: TabDescriptor[] = [
  { icon: PiPencilLine, label: 'Editor', id: 'EDITOR' },
  { icon: RiMusicLine, label: 'Tab & Sheet music', id: 'SHEET_MUSIC' },
]

export const Toolbar: FC = () => {
  const activeTab = useSelector(getActiveTab)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className={toolbarStyle}>
      <div className={titleStyle}>
        <RiFootprintFill />
        <span>Stick</span>
      </div>
      <div className={tabContainerStyle}>
        {TABS.map(({ id, icon: Icon, label }) => {
          const className =
            id === activeTab ? cx(tabStyle, activeTabStyle) : tabStyle
          const onClick = () => dispatch(updateConfig({ activeTab: id }))
          return (
            <div className={className} key={id} onClick={onClick}>
              <Icon /> {label}
            </div>
          )
        })}
      </div>
    </div>
  )
}
