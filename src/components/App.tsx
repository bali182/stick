import { css } from '@emotion/css'
import { FC } from 'react'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'

const appStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const App: FC = () => {
  return (
    <div className={appStyle}>
      <Toolbar />
      <Editor />
    </div>
  )
}
