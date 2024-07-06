import { css } from '@emotion/css'
import { FC } from 'react'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  height: 60px;
  width: 100%;
`

export const ProjectToolBar: FC = () => {
  return <div className={toolbarStyle}>Hello</div>
}
