import { css } from '@emotion/css'
import { FC, useEffect } from 'react'
import { ProjectToolBar } from './ProjectToolBar'
import { useDispatch, useSelector } from 'react-redux'
import { AppState, ConfigState } from '../../state/types'
import { isNil } from '../../model/isNil'
import { NewProjectModal } from './NewProjectModal'
import { progressionsSlice } from '../../state/progressions'
import { AppDispatch } from '../../state/store'
import { configSlice } from '../../state/config'
import { ChordChart } from './ChordChart'

export const Editor: FC = () => {
  const { progressionId } = useSelector<AppState, ConfigState>(
    (state) => state.config,
  )
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const hasNoProgressions = progressions.length === 0
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (isNil(progressionId) && progressions.length > 0) {
      dispatch(
        configSlice.actions.updateConfig({
          progressionId: progressions[0]!.id,
        }),
      )
    }
  }, [progressions, progressionId])

  return (
    <>
      <ProjectToolBar />
      {hasNoProgressions && (
        <NewProjectModal canClose={false} onClose={() => {}} />
      )}
      {!isNil(progressionId) && <ChordChart />}
    </>
  )
}
