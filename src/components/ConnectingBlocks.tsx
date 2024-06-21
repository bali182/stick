import { css } from '@emotion/css'
import { FC } from 'react'
import { ChordProgression } from '../chartModel'
import { BarBlock } from './BarBlock'

export type ConnectingBlockProps = {}

const connectingBlockStyle = css`
  padding: 3px 10px;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: white;
`

export const ConnectingBlock: FC<ConnectingBlockProps> = ({}) => {
  return <div className={connectingBlockStyle}></div>
}

export const LeadingBlock: FC<ConnectingBlockProps> = ({}) => {
  return <div className={connectingBlockStyle}></div>
}

export const TrailingBlock: FC<ConnectingBlockProps> = ({}) => {
  return <div className={connectingBlockStyle}></div>
}
