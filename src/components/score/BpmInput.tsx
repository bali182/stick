import { css } from '@emotion/css'
import { ChangeEvent, FC } from 'react'

const containerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

const inputStyle = css`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  outline: none;
  color: #ffffffdd;
  width: 55px;
  padding: 4px 0px 4px 10px;
  appearance: none;
  &:hover,
  &:focus {
    appearance: auto;
    color: #ffffff;
    background-color: #ffffff30;
  }
`

const labelStyle = css`
  font-size: 1em;
  color: #ffffffdd;
`

export type BpmInputProps = {
  value: number
  onChange: (value: number) => void
}

export const BpmInput: FC<BpmInputProps> = ({ value, onChange }) => {
  const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.valueAsNumber)
  }
  return (
    <div className={containerStyle}>
      <input
        type="number"
        value={value}
        onChange={_onChange}
        className={inputStyle}
      />
      <span className={labelStyle}>bpm</span>
    </div>
  )
}
