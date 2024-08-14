import { FC, PropsWithChildren } from 'react'
import { css } from '@emotion/css'

export type ChordBlockProps = PropsWithChildren & {
  color: string
  onHoverStatusChanged?: (isHovered: boolean) => void
}

const chordBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-radius: 10px;
  gap: 3px;
  height: 138px;
  padding: 12px 14px 8px 14px;
`

export const PureChordBlock: FC<ChordBlockProps> = ({
  onHoverStatusChanged,
  color,
  children,
}) => {
  const onMouseEnter = () => onHoverStatusChanged?.(true)
  const onMouseLeave = () => onHoverStatusChanged?.(false)

  return (
    <div
      className={chordBlockStyle}
      style={{ background: color }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  )
}
