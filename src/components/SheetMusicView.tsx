import { css } from '@emotion/css'
import { FC } from 'react'
import { Tab } from './Tab'

const sheetMusicViewStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SheetMusicView: FC = () => {
  return (
    <div className={sheetMusicViewStyle}>
      <Tab id="tab"></Tab>
    </div>
  )
}
