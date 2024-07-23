import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation, useParams } from 'react-router-dom'
import { AppState } from '../state/types'
import { progressionsSlice } from '../state/progressions'
import { isNil } from '../model/isNil'

function stripTrailingSlash(path: string) {
  return path.endsWith('/') ? path.slice(0, -1) : path
}

export const NeedsProgressionRoute: FC = () => {
  const { progressionId } = useParams<{ progressionId: string }>()
  const location = useLocation()
  const progression = useSelector((state: AppState) =>
    progressionsSlice.selectors.getProgression(state, progressionId),
  )
  if (isNil(progression)) {
    return <Navigate to={`/${progressionId}/404`} replace />
  }

  if (stripTrailingSlash(location.pathname) === `/${progressionId}`) {
    return <Navigate to={`/${progressionId}/editor`} replace />
  }

  return <Outlet />
}
