import { css } from '@emotion/css'
import { FC, PropsWithChildren } from 'react'
import { StickLogo } from './StickLogo'

const toolbarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100px;
  width: 100%;
  padding: 14px 50px;
`

export const Toolbar: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={toolbarStyle}>
      <StickLogo />
      {children}
    </div>
  )
}
