import { DraggableAttributes, DraggableSyntheticListeners } from '@dnd-kit/core'
import { css, cx } from '@emotion/css'
import { useState, Children, forwardRef, HTMLProps } from 'react'
import { FiPlusSquare, FiTrash2 } from 'react-icons/fi'
import { RiDraggable } from 'react-icons/ri'
import { LuSplitSquareHorizontal } from 'react-icons/lu'
import { PiCopyBold } from 'react-icons/pi'

export type PureBarBlockProps = HTMLProps<HTMLDivElement> & {
  count: number
  attributes: DraggableAttributes
  listeners: DraggableSyntheticListeners
  onDelete: () => void
  onClone: () => void
  onAddFirst: () => void
  onAddSecond: () => void
}

const barBlockStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 10px;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  box-shadow: none;
  height: 183px;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-color: #ffffff35;
  }
`

const chordsContainerStyle = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 10px;
  padding: 10px 10px 0px 10px;
  position: relative;
`

const footerStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  padding: 0px 10px;
  color: #fff;
  font-size: 1em;
  height: 35px;
`

const footerBlockStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  justify-self: start;
`

const dragAreaStyle = css`
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 3px;
  cursor: move;
  justify-self: center;
  &:hover {
    background-color: #ffffff20;
  }
`

const dragIconStyle = css`
  transform: rotate(90deg);
`

const addChordOverlayStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 60px;
  right: 10px;
  bottom: 50px;
  border-radius: 10px;
  width: 40px;
`

const emptyBarAddButtonStyle = css`
  height: 138px;
  font-weight: bold;
  color: #ffffffaa;
  padding: 0px 15px;
  font-size: 2em;
  text-align: center;
  transition: color 0.2s ease, border-color 0.2s ease,
    background-color 0.2s ease;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 10px;
  padding: 14px;
  border: 2px dashed #ffffff30;
  background-color: #ffffff15;
  cursor: pointer;
  &:hover {
    color: #ffffffcc;
    background: #ffffff25;
    border-color: #ffffff60;
  }
`

const addChordCloneStyle = css`
  color: #fff;
  font-size: 1.8em;
  cursor: pointer;
`

const addFirstChordStyle = css``

const iconStyle = css`
  color: #ffffffbb;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`

const binIconStyle = cx(
  iconStyle,
  css`
    justify-self: end;
  `,
)

export const PureBarBlock = forwardRef<HTMLDivElement, PureBarBlockProps>(
  (
    {
      count,
      children: _children,
      onAddFirst,
      onAddSecond,
      onDelete,
      onClone,
      listeners,
      attributes,
      style,
    },
    ref,
  ) => {
    const [isHovered, setHovered] = useState(false)
    const [isChordsAreaHovered, setChordsAreaHovered] = useState(false)

    const onMouseEnter = () => setHovered(true)
    const onMouseLeave = () => setHovered(false)
    const onChordsAreaMouseEnter = () => setChordsAreaHovered(true)
    const onChordsAreaMouseLeave = () => setChordsAreaHovered(false)

    const children = Children.toArray(_children)

    return (
      <div
        ref={ref}
        className={barBlockStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={style}
        {...attributes}
        tabIndex={-1}
      >
        <div
          className={chordsContainerStyle}
          onMouseEnter={onChordsAreaMouseEnter}
          onMouseLeave={onChordsAreaMouseLeave}
        >
          {children}
          {children.length === 1 && isChordsAreaHovered ? (
            <div className={addChordOverlayStyle}>
              <LuSplitSquareHorizontal
                className={addChordCloneStyle}
                onClick={onAddSecond}
              />
            </div>
          ) : null}
          {children.length === 0 ? (
            <button className={emptyBarAddButtonStyle} onClick={onAddFirst}>
              <FiPlusSquare className={addFirstChordStyle} /> Chord
            </button>
          ) : null}
        </div>
        <div className={footerStyle}>
          <div className={footerBlockStyle}>
            <span>&#65283;{count}</span>
            <PiCopyBold
              style={{ visibility: isHovered ? 'visible' : 'hidden' }}
              className={iconStyle}
              onClick={onClone}
            />
          </div>
          <div
            style={{ opacity: isHovered ? 1 : 0 }}
            className={dragAreaStyle}
            {...listeners}
          >
            <RiDraggable className={dragIconStyle} />
          </div>
          <FiTrash2
            style={{ visibility: isHovered ? 'visible' : 'hidden' }}
            className={binIconStyle}
            onClick={onDelete}
          />
        </div>
      </div>
    )
  },
)
