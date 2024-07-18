import { css } from '@emotion/css'
import { FC } from 'react'
import { StringEditor } from './StringEditor'

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  padding: 14px;
  pointer-events: auto;
`

const labelStyle = css`
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 2px;
  pointer-events: auto;
`

const descriptionStyle = css`
  font-size: 0.8em;
  margin-bottom: 10px;
  color: #ffffffaa;
`

export const StringsSettings: FC = ({}) => {
  return (
    <div className={sectionStyle}>
      <label className={labelStyle}>Tuning</label>
      <span className={descriptionStyle}>
        You can change the tuning here to the exact tuning you are using.
      </span>
      <StringEditor />
    </div>
  )
}
