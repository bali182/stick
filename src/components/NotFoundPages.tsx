import { FC } from 'react'
import { Toolbar } from './Toolbar'
import { css } from '@emotion/css'
import { RiSearchLine } from 'react-icons/ri'
import { buttonStyle } from './commonStyles'
import { Paths } from './paths'

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

export const ProgressionNotFoundPage: FC = () => {
  return (
    <>
      <Toolbar />
      <div className={containerStyle}>
        <RiSearchLine className={iconStyle} />
        <span className={textStyle}>
          The progression you are looking for doesn't exist!
        </span>
        <a className={buttonStyle} href={Paths.href.home()}>
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
        <a className={buttonStyle} href={Paths.href.home()}>
          Go back
        </a>
      </div>
    </>
  )
}
