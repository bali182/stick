import { css } from '@emotion/css'
import { FC, ReactNode } from 'react'
import { ArrowContainer, PopoverState } from 'react-tiny-popover'

export type PopoverContentProps = PopoverState & {
  children: ReactNode
}

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 280px;
  height: 340px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const PopoverContent: FC<PopoverContentProps> = ({
  position,
  childRect,
  popoverRect,
  children,
}) => {
  return (
    <ArrowContainer
      position={position}
      childRect={childRect}
      popoverRect={popoverRect}
      arrowColor="#181818"
      arrowSize={10}
    >
      <div className={popoverStyle}>{children}</div>
    </ArrowContainer>
  )
}
