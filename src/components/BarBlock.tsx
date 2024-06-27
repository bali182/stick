import { css } from '@emotion/css'
import { FC, useState } from 'react'
import { ChordBlock } from './ChordBlock'
import { useDispatch, useSelector } from 'react-redux'
import { addChords, deleteBar, getBar } from '../state/bars'
import { AppDispatch, AppState } from '../state/store'
import { BarModel, ChordSymbol } from '../chartModel'
import { FiPlusSquare, FiTrash2 } from 'react-icons/fi'
import { LuSplitSquareHorizontal } from 'react-icons/lu'
import { createChord, deleteChords, getChord } from '../state/chords'
import { removeBars } from '../state/progressions'
import { nanoid } from 'nanoid'

export type BarBlockProps = {
  progressionId: string
  barId: string
  count: number
}

const barBlockStyle = css`
  display: flex;
  flex-direction: column;
  gap: 0px;
  border-radius: 10px;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  box-shadow: none;
  height: 170px;
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
  cursor: pointer;
  top: 10px;
  right: 10px;
  bottom: 0px;
  border-radius: 10px;
  width: 40px;
  background: linear-gradient(90deg, #00000000 0%, #00000030 100%); ;
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
`

const addFirstChordStyle = css``

const trashIconStyle = css`
  color: #fff;
  cursor: pointer;
`

export const BarBlock: FC<BarBlockProps> = ({
  barId,
  progressionId,
  count,
}) => {
  const [isHovered, setHovered] = useState(false)
  const [isChordsAreaHovered, setChordsAreaHovered] = useState(false)
  const bar = useSelector<AppState, BarModel | undefined>((state) =>
    getBar(state, barId),
  )
  const firstChord = useSelector<AppState, ChordSymbol | undefined>((state) => {
    if (bar?.chords?.length !== 1) {
      return undefined
    }
    const chordId = bar?.chords[0]!
    return getChord(state, chordId)
  })

  const dispatch = useDispatch<AppDispatch>()

  const onDeleteBar = () => {
    const chordIds = bar?.chords ?? []
    dispatch(removeBars({ progressionId, barIds: [barId] }))
    dispatch(deleteBar({ barId }))
    dispatch(deleteChords({ chordIds }))
  }

  const onAddFirstChord = () => {
    if (firstChord) {
      return
    }
    const chord: ChordSymbol = { id: nanoid(), name: 'C', type: 'MAJOR' }
    dispatch(createChord({ chord }))
    dispatch(addChords({ barId, chordIds: [chord.id] }))
  }

  const onAddSecondChord = () => {
    if (!firstChord) {
      return
    }
    const clonedChord = { ...firstChord, id: nanoid() }
    dispatch(createChord({ chord: clonedChord }))
    dispatch(addChords({ barId, chordIds: [clonedChord.id] }))
  }

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)
  const onChordsAreaMouseEnter = () => setChordsAreaHovered(true)
  const onChordsAreaMouseLeave = () => setChordsAreaHovered(false)

  if (!bar) {
    return (
      <div className={barBlockStyle}>
        <div className={chordsContainerStyle}>Bar "{barId}" doesn't exist!</div>
        <div className={barCountContainerStyle}>&#65283;{count}</div>
      </div>
    )
  }

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
        {bar.chords.map((chordId, i) => (
          <ChordBlock
            progressionId={progressionId}
            barId={barId}
            chordId={chordId}
            key={i}
          />
        ))}
        {bar.chords.length === 1 && isChordsAreaHovered ? (
          <div className={addChordOverlayStyle} onClick={onAddSecondChord}>
            <LuSplitSquareHorizontal className={addChordCloneStyle} />
          </div>
        ) : null}
        {bar.chords.length === 0 ? (
          <div className={emptyBarAddButtonStyle} onClick={onAddFirstChord}>
            <FiPlusSquare className={addFirstChordStyle} /> Chord
          </div>
        ) : null}
      </div>
      <div className={barCountContainerStyle}>
        <span>&#65283;{count}</span>
        {isHovered ? (
          <FiTrash2 className={trashIconStyle} onClick={onDeleteBar} />
        ) : null}
      </div>
    </div>
  )
}