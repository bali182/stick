import { isNil } from '../../model/isNil'
import { CanFitFn, Position, Spaces } from './types'

const CanFit: Record<Position, CanFitFn> = {
  top: (
    rect: DOMRect,
    { spaceAbove, spaceLeft, spaceRight }: Spaces,
  ): boolean => {
    return (
      spaceAbove > rect.height &&
      spaceLeft > rect.width / 2 &&
      spaceRight > rect.width / 2
    )
  },
  bottom: (
    rect: DOMRect,
    { spaceBelow, spaceLeft, spaceRight }: Spaces,
  ): boolean => {
    return (
      spaceBelow > rect.height &&
      spaceLeft > rect.width / 2 &&
      spaceRight > rect.width / 2
    )
  },
  left: (
    rect: DOMRect,
    { spaceLeft, spaceAbove, spaceBelow }: Spaces,
  ): boolean => {
    return (
      spaceLeft > rect.width &&
      spaceAbove > rect.height / 2 &&
      spaceBelow > rect.height / 2
    )
  },
  right: (
    rect: DOMRect,
    { spaceRight, spaceAbove, spaceBelow }: Spaces,
  ): boolean => {
    return (
      spaceRight > rect.width &&
      spaceAbove > rect.height / 2 &&
      spaceBelow > rect.height / 2
    )
  },
}

const DEFAULT_ORDER: Position[] = ['top', 'bottom', 'left', 'right']

export function getTooltipPosition(
  elementRect: DOMRect,
  tooltipRect: DOMRect,
  order: Position[] = DEFAULT_ORDER,
): Position {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  const spaces: Spaces = {
    spaceAbove: elementRect.top,
    spaceBelow: viewportHeight - elementRect.bottom,
    spaceLeft: elementRect.left,
    spaceRight: viewportWidth - elementRect.right,
  }

  const position = order.find((pos) => CanFit[pos](tooltipRect, spaces))

  if (isNil(position)) {
    console.error(`Can't fit tooltip properly`, elementRect)
    return 'bottom'
  }
  return position
}

export function getTooltipCoordinates(
  position: Position,
  elementRect: DOMRect,
  _tooltipRect: DOMRect,
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
  // if (x < 0) {
  //   x = 0
  // }
  // if (x + tooltipRect.width > viewportWidth) {
  //   x = viewportWidth - tooltipRect.width
  // }
  // if (y < 0) {
  //   y = 0
  // }
  // if (y + tooltipRect.height > viewportHeight) {
  //   y = viewportHeight - tooltipRect.height
  // }
  return [x, y]
}
