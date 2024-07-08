import { css } from '@emotion/css'
import { FC } from 'react'
import { Score } from './Score'
import { useSelector } from 'react-redux'
import { NoScoreView } from './NoScoreView'
import { AppState } from '../../state/types'
import { getProgressionStatus } from '../../state/selectors/getProgressionStatus'
import { ProgressionsStatus } from '../../model/types'

const scoreViewStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ScoreView: FC = () => {
  const { canGenerateScore } = useSelector<AppState, ProgressionsStatus>(
    (state) => getProgressionStatus(state, 'default'),
  )
  return (
    <div className={scoreViewStyle}>
      {!canGenerateScore ? <NoScoreView /> : null}
      {canGenerateScore ? <Score progressionId="default"></Score> : null}
    </div>
  )
}
