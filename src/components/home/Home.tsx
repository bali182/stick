import { FC } from 'react'
import { css } from '@emotion/css'
import { Toolbar } from '../Toolbar'
import { NewProgression, RecentProgressions } from './Progressions'

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 60px;
  overflow: auto;
  height: calc(100vh - 100px);
`

export const Home: FC = () => {
  return (
    <>
      <Toolbar />
      <div className={contentContainerStyle}>
        <RecentProgressions />
        <NewProgression />
      </div>
    </>
  )
}
