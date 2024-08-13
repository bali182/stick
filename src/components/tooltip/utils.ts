import { Position } from './types'

export function getTooltipPosition(
  elementRect: DOMRect,
  tooltipRect: DOMRect,
): Position {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const spaceAbove = elementRect.top
  const spaceBelow = viewportHeight - elementRect.bottom
  const spaceLeft = elementRect.left
  const spaceRight = viewportWidth - elementRect.right

  if (spaceAbove > tooltipRect.height + 10) {
    return 'top'
  } else if (spaceBelow > tooltipRect.height + 10) {
    return 'bottom'
  } else if (spaceLeft > tooltipRect.width + 10) {
    return 'left'
  } else if (spaceRight > tooltipRect.width + 10) {
    return 'right'
  }
  console.error('couldnt compute position')
  return 'bottom'
}

export function getTooltipCoordinates(
  position: Position,
  elementRect: DOMRect,
  tooltipRect: DOMRect,
): [number, number] {
  let x = 0
  let y = 0
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  switch (position) {
    case 'top': {
      x = elementRect.left + elementRect.width / 2
      y = elementRect.top - 10
      break
    }
    case 'bottom': {
      x = elementRect.left + elementRect.width / 2
      y = elementRect.bottom
      break
    }
    case 'left': {
      x = elementRect.left - 10
      y = elementRect.top + elementRect.height / 2
      break
    }
    case 'right': {
      x = elementRect.right
      y = elementRect.top + elementRect.height / 2
      break
    }
  }
  // Ensure tooltip stays within viewport boundaries
  if (x < 0) {
    x = 0
  }
  if (x + tooltipRect.width > viewportWidth) {
    x = viewportWidth - tooltipRect.width
  }
  if (y < 0) {
    y = 0
  }
  if (y + tooltipRect.height > viewportHeight) {
    y = viewportHeight - tooltipRect.height
  }
  return [x, y]
}
