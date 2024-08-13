import { css, cx } from '@emotion/css'
import { Position } from './types'
import { CSSProperties, forwardRef } from 'react'

const color = '#666'
const arrowSize = 8
const arrowSizeShift = arrowSize * 2 - 2

export const baseTooltipStyle = css`
  position: fixed;
  background-color: ${color};
  color: #ffffffaa;
  padding: 5px 10px;
  border-radius: 6px;
  pointer-events: none;
  z-index: 1000;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.1s ease, visibility 0.1s ease;
`

export const baseArrowStyle = css`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: ${arrowSize}px;
  border-color: transparent;
`

const tooltipPositions: Record<Position, string> = {
  top: css`
    transform: translate(-50%, -100%);
  `,
  bottom: css`
    transform: translate(-50%, 10px);
  `,
  left: css`
    transform: translate(-100%, -50%);
  `,
  right: css`
    transform: translate(10px, -50%);
  `,
}

const arrowPositions: Record<Position, string> = {
  top: css`
    bottom: -${arrowSizeShift}px;
    left: 50%;
    transform: translateX(-50%);
    border-top-color: ${color} !important;
  `,
  bottom: css`
    top: -${arrowSizeShift}px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-color: ${color} !important;
  `,
  left: css`
    right: -${arrowSizeShift}px;
    top: 50%;
    transform: translateY(-50%);
    border-left-color: ${color} !important;
  `,
  right: css`
    left: -${arrowSizeShift}px;
    top: 50%;
    transform: translateY(-50%);
    border-right-color: ${color} !important;
  `,
}

export type TooltipProps = {
  content: string
  x: number
  y: number
  position: Position
  visible: boolean
}

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ content, x, y, visible, position }, ref) => {
    const styles: CSSProperties = {
      top: y,
      left: x,
      visibility: visible ? 'visible' : 'hidden',
      opacity: visible ? 1 : 0,
    }

    const tooltipStyle = cx(baseTooltipStyle, tooltipPositions[position])
    const arrowStyle = cx(baseArrowStyle, arrowPositions[position])

    return (
      <div ref={ref} className={tooltipStyle} style={styles}>
        <div className={arrowStyle}></div>
        {content}
      </div>
    )
  },
)
