import { css } from '@emotion/css'
import { FC } from 'react'

const toolbarStyle = css`
  height: 100px;
  width: 100%;
  padding: 14px 50px;
`

const titleStyle = css`
  color: #fff;
  font-family: 'Poppins';
  font-size: 1em;
`

const tabContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const tabStyle = css`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 8px 16px;
`

export const Toolbar: FC = () => {
  return (
    <div className={toolbarStyle}>
      <div className={titleStyle}>Stick</div>
      <div className={tabContainerStyle}>
        <div className={tabStyle}>Editor</div>
        <div className={tabStyle}>Tab & Sheet music</div>
      </div>
    </div>
  )
}
