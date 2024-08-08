import * as React from 'react'
import { GridSettings } from './gridTypes'
import { StateType } from './useGestureResponder'

export interface GridItemContextType {
  top: number
  disableDrag: boolean
  endTraverse: () => void
  mountWithTraverseTarget?: [number, number]
  left: number
  i: number
  onMove: (state: StateType, x: number, y: number) => void
  onEnd: (state: StateType, x: number, y: number) => void
  onStart: () => void
  grid: GridSettings
  dragging: boolean
}

const noop = () => {
  throw Error('GridItem must be used as a child of GridDropZone')
}

export const GridItemContext = React.createContext<GridItemContextType | null>(
  null,
)
