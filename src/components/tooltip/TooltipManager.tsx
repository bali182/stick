import {
  FC,
  useRef,
  useMemo,
  useState,
  useLayoutEffect,
  useEffect,
} from 'react'
import { createPortal } from 'react-dom'
import { Tooltip } from './Tooltip'
import { Position, PositionData } from './types'
import { useActiveElement } from './useActiveElement'
import { isNil } from '../../model/isNil'
import { getTooltipCoordinates, getTooltipPosition } from './utils'

const TOOLTIP_ROOT = document.getElementById('tooltip')!

const TooltipManager: FC = () => {
  const tooltipRef = useRef<HTMLDivElement>(null)
  const element = useActiveElement()
  const [content, setContent] = useState<string>('')

  const [{ position, x, y }, setPositionData] = useState<PositionData>({
    position: 'bottom',
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (!isNil(element)) {
      setContent(element.getAttribute('data-tooltip') ?? '')
    }
  }, [element])

  useLayoutEffect(() => {
    if (!tooltipRef.current || !element) return
    const tooltipRect = tooltipRef.current.getBoundingClientRect()
    const elementRect = element.getBoundingClientRect()
    const position: Position = getTooltipPosition(elementRect, tooltipRect)
    const [x, y] = getTooltipCoordinates(position, elementRect, tooltipRect)
    setPositionData({ position, x, y })
  }, [element, content])

  return createPortal(
    <Tooltip
      ref={tooltipRef}
      content={content}
      visible={!isNil(element)}
      position={position}
      x={x}
      y={y}
    />,
    TOOLTIP_ROOT,
  )
}

export default TooltipManager
