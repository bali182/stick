import { css } from '@emotion/css'
import { FC } from 'react'
import { Tab } from './Tab'
import { useSelector } from 'react-redux'
import { canSolve } from '../state/canSolve'
import { AppState } from '../state/store'

const sheetMusicViewStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const SheetMusicView: FC = () => {
  const canRender = useSelector<AppState, boolean>((state) =>
    canSolve(state, 'default'),
  )
  return (
    <div className={sheetMusicViewStyle}>
      {!canRender ? <span>Please fill the progression!</span> : null}
      {canRender ? <Tab id="tab" progressionId="default"></Tab> : null}
    </div>
  )
}
