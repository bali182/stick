import { css } from '@emotion/css'
import { FC } from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'
import { useSelector } from 'react-redux'
import { getActiveTab } from '../state/config'
import { SheetMusicView } from './SheetMusicView'

const appStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const App: FC = () => {
  const activeTab = useSelector(getActiveTab)
  return (
    <div className={appStyle}>
      <Toolbar />
      {activeTab === 'EDITOR' ? <Editor /> : null}
      {activeTab === 'SHEET_MUSIC' ? <SheetMusicView /> : null}
    </div>
  )
}
