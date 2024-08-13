import React, { CSSProperties } from 'react'
import { css } from '@emotion/css'

export type TooltipProps = {
  content: string
  x: number
  y: number
  visible: boolean
}

const tooltipStyle = css`
  position: fixed;
  transform: translate(-50%, 10px);
  color: white;
  background-color: #333;
  padding: 5px 10px;
  border-radius: 4px;
  pointer-events: none;
  z-index: 1000;
  white-space: nowrap;
  visibility: hidden;
  transition: opacity 0.2s ease;
`

const arrowStyle = css`
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #333;
`

const Tooltip: React.FC<TooltipProps> = ({ content, x, y, visible }) => {
  const styles: CSSProperties = {
    top: y,
    left: x,
    visibility: visible ? 'visible' : 'hidden',
  }
  return (
    <div className={tooltipStyle} style={styles}>
      <div className={arrowStyle}></div>
      {content}
    </div>
  )
}

export default Tooltip
