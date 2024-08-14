import { FC } from 'react'
import { ProgressionToolBar } from './ProgressionToolBar'
import { ChordChart } from './ChordChart'
import { Toolbar } from '../Toolbar'
import { Navigation } from '../Navigation'
import { LanguageSelector } from '../LanguageSelector'

export const Editor: FC = () => {
  return (
    <>
      <Toolbar>
        <Navigation />
        <LanguageSelector />
      </Toolbar>
      <ProgressionToolBar />
      <ChordChart />
    </>
  )
}
