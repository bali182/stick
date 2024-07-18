import { css } from '@emotion/css'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'
import { lerp } from '../../model/utils'

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const rowStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const stringStyle = css`
  background-color: #ffffffaa;
  flex: 1 1 1px;
`

const inputStyle = css`
  border-radius: 6px;
  background-color: #ffffff10;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px 14px;
  font-size: 1em;
  width: 60px;
  &:hover {
    background-color: #ffffff30;
  }

  &:focus {
    background-color: #ffffff50;
  }
`

export const StringEditor: FC = () => {
  const progression = useSelector(getActiveProgression)
  const tuning = progression?.tuning!
  return (
    <div className={containerStyle}>
      {tuning.map((note, i) => {
        const height = lerp(6, 18, i / tuning.length)
        const borderRadius = height / 2
        return (
          <div className={rowStyle} key={`${note}-${i}`}>
            <input className={inputStyle} value={note} onChange={() => {}} />
            <div className={stringStyle} style={{ borderRadius, height }} />
          </div>
        )
      })}
    </div>
  )
}
