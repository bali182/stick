import { css } from '@emotion/css'
import { FC } from 'react'
import { Route, Routes } from 'react-router'
import { Toolbar } from './Toolbar'
import { Editor } from './Editor'
import { SheetMusicView } from './SheetMusicView'
import { Chord } from 'tonal'
import { CHORD_TYPES } from '../model/constants'
import { getChordTypeSuffix } from '../model/getChordTypeSuffix'

const appStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const contentContainerStyle = css`
  flex: 1;
  overflow: auto;
`

CHORD_TYPES.forEach((type) => {
  // const chord = Chord.get(
  //   getChordSymbolName({ id: '', name: 'A', root: 'A1', type }),
  // )
  // console.log(chord)

  const shortType = getChordTypeSuffix(type, false)
  console.log({
    [shortType]: Chord.notes(shortType, 'G4'),
  })
})

export const App: FC = () => {
  return (
    <div className={appStyle}>
      <Toolbar />
      <div className={contentContainerStyle}>
        <Routes>
          <Route>
            <Route path="/" Component={Editor} />
            <Route path="/editor" Component={Editor} />
            <Route path="/sheet-music" Component={SheetMusicView} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}
