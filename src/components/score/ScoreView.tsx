import { css } from '@emotion/css'
import { FC } from 'react'
import { Score } from './Score'
import { useSelector } from 'react-redux'
import { canSolve } from '../../state/canSolve'
import { AppState } from '../../state/store'
import { NoScoreView } from './NoScoreView'

const scoreViewStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const ScoreView: FC = () => {
  const canRender = useSelector<AppState, boolean>((state) =>
    canSolve(state, 'default'),
  )
  return (
    <div className={scoreViewStyle}>
      {!canRender ? <NoScoreView /> : null}
      {canRender ? <Score progressionId="default"></Score> : null}
    </div>
  )
}
