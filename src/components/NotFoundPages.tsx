import { FC } from 'react'
import { Toolbar } from './Toolbar'
import { css } from '@emotion/css'
import { RiSearchLine } from 'react-icons/ri'

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  gap: 20px;
`

const iconStyle = css`
  color: #fff;
  font-size: 4em;
`

const textStyle = css`
  text-align: center;
  font-size: 1em;
  color: #fff;
`

const buttonStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffffdd;
  padding: 8px 16px;
  gap: 6px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 6px;
  background-color: transparent;
  background-color: #ffffff30;
  &:hover {
    color: #fff;
    background-color: #ffffff40;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

export const ProgressionNotFoundPage: FC = () => {
  return (
    <>
      <Toolbar />
      <div className={containerStyle}>
        <RiSearchLine className={iconStyle} />
        <span className={textStyle}>
          The progression you are looking for doesn't exist!
        </span>
        <a className={buttonStyle} href="/">
          Go back
        </a>
      </div>
    </>
  )
}

export const NotFoundPage: FC = () => {
  return (
    <>
      <Toolbar />
      <div className={containerStyle}>
        <RiSearchLine className={iconStyle} />
        <span className={textStyle}>404 - this page doesn't do anything.</span>
        <a className={buttonStyle} href="/">
          Go back
        </a>
      </div>
    </>
  )
}
