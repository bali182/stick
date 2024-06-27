import { css } from '@emotion/css'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'
import { SheetMusicView } from './SheetMusicView'

const appStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const router = createHashRouter([
  {
    path: '/',
    Component: Editor,
  },
  {
    path: '/editor',
    Component: Editor,
  },
  {
    path: '/sheet-music',
    Component: SheetMusicView,
  },
])

export const App: FC = () => {
  return (
    <div className={appStyle}>
      <Toolbar />
      <Routes>
        <Route>
          <Route path="/" Component={Editor} />
          <Route path="/editor" Component={Editor} />
          <Route path="/sheet-music" Component={SheetMusicView} />
        </Route>
      </Routes>
    </div>
  )
}
