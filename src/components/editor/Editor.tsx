import { css } from '@emotion/css'
import { FC } from 'react'
import { ChordChart } from './ChordChart'
import { ProjectToolBar } from './ProjectToolBar'

const editorStyle = css`
  height: 100%;
  width: 100%;
`

export const Editor: FC = () => {
  return (
    <div className={editorStyle}>
      <ProjectToolBar progressionId="default" />
      <ChordChart progressionId="default" />
    </div>
  )
}
