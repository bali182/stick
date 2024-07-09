import { css } from '@emotion/css'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { Toolbar } from './Toolbar'
import { Editor } from './editor/Editor'
import { ScoreView } from './score/ScoreView'

const appStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const App: FC = () => {
  return (
    <div className={appStyle}>
      <Toolbar />
      <Routes>
        <Route>
          <Route path="/" Component={Editor} />
          <Route path="/editor" Component={Editor} />
          <Route path="/score" Component={ScoreView} />
        </Route>
      </Routes>
    </div>
  )
}
