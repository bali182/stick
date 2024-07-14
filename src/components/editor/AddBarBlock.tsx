import { css } from '@emotion/css'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { Bar } from '../../model/types'
import { FiPlusSquare } from 'react-icons/fi'
import { nanoid } from 'nanoid'
import { barsSlice } from '../../state/bars'
import { progressionsSlice } from '../../state/progressions'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'

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

export const AddBarBlock: FC = () => {
  const progression = useSelector(getActiveProgression)
  const dispatch = useDispatch<AppDispatch>()

  const onAddBar = () => {
    const bar: Bar = { id: nanoid(), chords: [] }
    dispatch(barsSlice.actions.createBar({ bar }))
    dispatch(
      progressionsSlice.actions.addBars({
        progressionId: progression?.id!,
        barIds: [bar.id],
      }),
    )
  }

  return (
    <div className={barBlockStyle} onClick={onAddBar}>
      <div className={addButtonStyle}>
        <FiPlusSquare className={addBarIconStyle} /> Bar
      </div>
    </div>
  )
}
