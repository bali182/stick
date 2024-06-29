import { css } from '@emotion/css'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { createBar } from '../state/bars'
import { AppDispatch } from '../state/store'
import { BarModel } from '../model/types'
import { FiPlusSquare } from 'react-icons/fi'
import { addBars } from '../state/progressions'
import { nanoid } from 'nanoid'

export type BarBlockProps = {
  progressionId: string
}

const barBlockStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  border: 2px dashed #ffffff30;
  background: transparent;
  height: 170px;
  overflow: hidden;
  transition: border-color 0.2s ease, background-color 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #ffffff10;
    border-color: #ffffff60;
  }
`

const addButtonStyle = css`
  font-weight: bold;
  color: #ffffffaa;
  font-size: 2em;
  text-align: center;
  transition: color 0.2s ease;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  gap: 10px;
  margin: 10px;
  padding: 14px;
  width: 100%;
  height: 100%;
  &:hover {
    color: #ffffffcc;
  }
`

const addBarIconStyle = css``

export const AddBarBlock: FC<BarBlockProps> = ({ progressionId }) => {
  const dispatch = useDispatch<AppDispatch>()

  const onAddBar = () => {
    const bar: BarModel = { id: nanoid(), chords: [] }
    dispatch(createBar({ bar }))
    dispatch(addBars({ progressionId, barIds: [bar.id] }))
  }

  return (
    <div className={barBlockStyle} onClick={onAddBar}>
      <div className={addButtonStyle}>
        <FiPlusSquare className={addBarIconStyle} /> Bar
      </div>
    </div>
  )
}
