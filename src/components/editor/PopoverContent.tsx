import { css } from '@emotion/css'
import { FC, ReactNode } from 'react'
import { ArrowContainer, PopoverState } from 'react-tiny-popover'

export type PopoverContentProps = PopoverState & {
  children: ReactNode
}

const popoverStyle = css`
  padding: 18px;
  background-color: #fff;
  border-radius: 12px;
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
      arrowColor="#ffffff"
      arrowSize={10}
    >
      <div className={popoverStyle}>{children}</div>
    </ArrowContainer>
  )
}
