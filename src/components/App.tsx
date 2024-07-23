import { css } from '@emotion/css'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { Editor } from './editor/Editor'
import { ScoreView } from './score/ScoreView'
import { Home } from './home/Home'
import { NeedsProgressionRoute } from './NeedsProgressionRoute'
import { NotFoundPage, ProgressionNotFoundPage } from './NotFoundPages'

const appStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const App: FC = () => {
  return (
    <div className={appStyle}>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/:progressionId/404" Component={ProgressionNotFoundPage} />
        <Route path="/:progressionId" Component={NeedsProgressionRoute}>
          <Route path="score" Component={ScoreView} />
          <Route path="editor" Component={Editor} />
        </Route>
        <Route path="*" Component={NotFoundPage} />
      </Routes>
    </div>
  )
}
