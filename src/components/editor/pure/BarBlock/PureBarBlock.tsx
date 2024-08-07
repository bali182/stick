import { css } from '@emotion/css'
import { FC, useState, ReactNode, Children } from 'react'
import { FiPlusSquare, FiTrash2 } from 'react-icons/fi'
import { LuSplitSquareHorizontal } from 'react-icons/lu'

export type PureBarBlockProps = {
  count: number
  children: ReactNode
  onDelete: () => void
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

const barCountContainerStyle = css`
  display: flex;
  padding: 6px 10px;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-size: 1em;
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

const trashIconStyle = css`
  color: #ffffffbb;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`

export const PureBarBlock: FC<PureBarBlockProps> = ({
  count,
  children: _children,
  onAddFirst,
  onAddSecond,
  onDelete,
}) => {
  const [isHovered, setHovered] = useState(false)
  const [isChordsAreaHovered, setChordsAreaHovered] = useState(false)

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)
  const onChordsAreaMouseEnter = () => setChordsAreaHovered(true)
  const onChordsAreaMouseLeave = () => setChordsAreaHovered(false)

  const children = Children.toArray(_children)

  return (
    <div
      className={barBlockStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
          <div className={emptyBarAddButtonStyle} onClick={onAddFirst}>
            <FiPlusSquare className={addFirstChordStyle} /> Chord
          </div>
        ) : null}
      </div>
      <div className={barCountContainerStyle}>
        <span>&#65283;{count}</span>
        {isHovered ? (
          <FiTrash2 className={trashIconStyle} onClick={onDelete} />
        ) : null}
      </div>
    </div>
  )
}
