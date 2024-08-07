import { css } from '@emotion/css'
import { FC, ReactNode } from 'react'

const chordChartStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-auto-rows: 1fr;
  gap: 16px;
  padding: 22px 60px;
  overflow: auto;
  max-height: calc(100vh - 100px - 70px);
`

export type PureChordChartProps = {
  children: ReactNode
}

export const PureChordChart: FC<PureChordChartProps> = ({ children }) => {
  return <div className={chordChartStyle}>{children}</div>
}
