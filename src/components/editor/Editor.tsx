import { FC, useEffect } from 'react'
import { ProjectToolBar } from './ProjectToolBar'
import { useSelector } from 'react-redux'
import { isNil } from '../../model/isNil'
import { NewProgressionModal } from './NewProgressionModal'
import { progressionsSlice } from '../../state/progressions'
import { ChordChart } from './ChordChart'
import { useActiveProgression } from '../../useActiveProgression'
import { useNavigate } from 'react-router'
import { Paths } from '../paths'
import { Toolbar } from '../Toolbar'
import { Navigation } from '../Navigation'

export const Editor: FC = () => {
  const progression = useActiveProgression()
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const hasNoProgressions = progressions.length === 0
  const navigate = useNavigate()

  useEffect(() => {
    if (isNil(progression?.id) && progressions.length > 0) {
      navigate(Paths.editor(progressions[0]!.id))
    }
  }, [progressions, progression?.id])

  return (
    <>
      <Toolbar>
        <Navigation />
      </Toolbar>
      <ProjectToolBar />
      {hasNoProgressions && (
        <NewProgressionModal canClose={false} onClose={() => {}} />
      )}
      {!isNil(progression?.id) && <ChordChart />}
    </>
  )
}
