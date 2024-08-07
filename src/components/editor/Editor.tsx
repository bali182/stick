import { FC } from 'react'
import { ProjectToolBar } from './ProjectToolBar'
import { ChordChart } from './ChordChart'
import { Toolbar } from '../Toolbar'
import { Navigation } from '../Navigation'

export const Editor: FC = () => {
  return (
    <>
      <Toolbar>
        <Navigation />
      </Toolbar>
      <ProjectToolBar />
      <ChordChart />
    </>
  )
}
