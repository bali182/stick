import { FC } from 'react'
import { ProgressionToolBar } from './ProgressionToolBar'
import { ChordChart } from './ChordChart'
import { Toolbar } from '../Toolbar'
import { Navigation } from '../Navigation'

export const Editor: FC = () => {
  return (
    <>
      <Toolbar>
        <Navigation />
      </Toolbar>
      <ProgressionToolBar />
      <ChordChart />
    </>
  )
}
