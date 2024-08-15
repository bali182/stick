import { FC, useRef, useState, useLayoutEffect, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Tooltip } from './Tooltip'
import { Position, PositionData } from './types'
import { useActiveElement } from './useActiveElement'
import { isNil } from '../../model/isNil'
import { getTooltipCoordinates, getTooltipPosition } from './utils'
import { MessageKey } from '../../languages/types'

const TOOLTIP_ROOT = document.getElementById('tooltip')!
const TOOLTIP_DELAY = 800
const NOOP = () => {}

type TooltipManagerProps = {
  disabled?: boolean
}

const TooltipManager: FC<TooltipManagerProps> = ({ disabled }) => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const element = useActiveElement()
  const [messageKey, setMessageKey] = useState<MessageKey>()
  const [visible, setVisible] = useState(false)

  const [{ position, x, y }, setPositionData] = useState<PositionData>({
    position: 'bottom',
    x: 0,
    y: 0,
  })

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    if (!isNil(element) && !disabled) {
      setMessageKey(element.getAttribute('data-tooltip') as MessageKey)
      timeoutId = setTimeout(() => setVisible(true), TOOLTIP_DELAY)
      return () => clearTimeout(timeoutId)
    } else {
      setVisible(false)
      return NOOP
    }
  }, [element])

  useLayoutEffect(() => {
    if (!tooltipRef.current || !element || disabled) {
      return
    }
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    const position: Position = getTooltipPosition(elementRect, tooltipRect)
    const [x, y] = getTooltipCoordinates(position, elementRect, tooltipRect)
    setPositionData({ position, x, y })
  }, [element, messageKey])

  return createPortal(
    <>
      <Tooltip
        ref={tooltipRef}
        messageKey={messageKey}
        visible={visible}
        position={position}
        x={x}
        y={y}
      />
      {/* <Tooltip
        messageKey={'Tooltips.Progression.Transition'}
        visible={true}
        position={'bottom'}
        x={500}
        y={300}
      /> */}
    </>,

    TOOLTIP_ROOT,
  )
}

export default TooltipManager
