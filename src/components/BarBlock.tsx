import { css } from '@emotion/css'
import { FC } from 'react'
import { ChordBlock } from './ChordBlock'
import { BarModel } from '../chartModel'

export type BarBlockProps = {
  bar: BarModel
  count: number
}

const barBlockStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 10px;
  background: linear-gradient(
    0deg,
    #ededed 0%,
    #ededed 30px,
    rgba(255, 255, 255, 1) 50px,
    rgba(255, 255, 255, 1) 100%
  );
`

const chordsContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const barCountContainerStyle = css`
  display: flex;
  padding: 4px 10px;
  color: #888;
  font-family: 'Poppins';
  font-size: 1em;
`

export const BarBlock: FC<BarBlockProps> = ({ bar, count }) => {
  return (
    <div className={barBlockStyle}>
      <div className={chordsContainerStyle}>
        {bar.chords.map((chord, i) => (
          <ChordBlock chord={chord} key={i} />
        ))}
      </div>
      <div className={barCountContainerStyle}>&#65283;{count}</div>
    </div>
  )
}
