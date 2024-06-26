import { css } from '@emotion/css'
import { FC } from 'react'
import { ChordChart } from './ChordChart'
import { Toolbar } from './Toolbar'

const editorStyle = css`
  height: 100%;
  width: 100%;
  padding: 14px 50px;
`

export const Editor: FC = () => {
  return (
    <div className={editorStyle}>
      <ChordChart progressionId="default" />
    </div>
  )
}
