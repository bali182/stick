import { useState, useEffect, FC } from 'react'
import { createPortal } from 'react-dom'
import Tooltip from './Tooltip'

const TOOLTIP_ROOT = document.getElementById('tooltip')!

// TooltipManager.tsx

interface TooltipData {
  content: string
  x: number
  y: number
  visible: boolean
}

const TooltipManager: FC = () => {
  const [tooltip, setTooltip] = useState<TooltipData>({
    content: '',
    x: 0,
    y: 0,
    visible: false,
  })

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      console.log('mouseover', e.target)
      let target = e.target as HTMLElement | null

      while (target && target !== document.body) {
        if (target.hasAttribute('data-tooltip')) {
          const content = target.getAttribute('data-tooltip') || ''
          const rect = target.getBoundingClientRect()

          const scrollX = window.scrollX || window.pageXOffset
          const scrollY = window.scrollY || window.pageYOffset

          const tooltipX = rect.left + rect.width / 2 + scrollX
          const tooltipY = rect.bottom + scrollY

          setTooltip({
            content,
            x: tooltipX,
            y: tooltipY,
            visible: true,
          })

          return
        }
        target = target.parentElement
      }

      setTooltip((prev) => ({ ...prev, visible: false }))
    }

    const handleMouseOut = (e: MouseEvent) => {
      console.log('mouseout', e.target)
      let relatedTarget = e.relatedTarget as HTMLElement | null

      while (relatedTarget && relatedTarget !== document.body) {
        if (relatedTarget.hasAttribute('data-tooltip')) {
          return
        }
        relatedTarget = relatedTarget.parentElement
      }

      setTooltip((prev) => ({ ...prev, visible: false }))
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return createPortal(
    <Tooltip
      content={tooltip.content}
      x={tooltip.x}
      y={tooltip.y}
      visible={tooltip.visible}
    />,
    TOOLTIP_ROOT,
  )
}

export default TooltipManager
