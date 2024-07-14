import { FC, useEffect } from 'react'
import { ProjectToolBar } from './ProjectToolBar'
import { useDispatch, useSelector } from 'react-redux'
import { isNil } from '../../model/isNil'
import { NewProgressionModal } from './NewProgressionModal'
import { progressionsSlice } from '../../state/progressions'
import { AppDispatch } from '../../state/store'
import { configSlice } from '../../state/config'
import { ChordChart } from './ChordChart'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'

export const Editor: FC = () => {
  const progression = useSelector(getActiveProgression)
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const hasNoProgressions = progressions.length === 0
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (isNil(progression?.id) && progressions.length > 0) {
      dispatch(
        configSlice.actions.updateConfig({
          progressionId: progressions[0]!.id,
        }),
      )
    }
  }, [progressions, progression?.id])

  return (
    <>
      <ProjectToolBar />
      {hasNoProgressions && (
        <NewProgressionModal canClose={false} onClose={() => {}} />
      )}
      {!isNil(progression?.id) && <ChordChart />}
    </>
  )
}
