import { css } from '@emotion/css'
import { FC, useState } from 'react'
import { ChordBlock } from './ChordBlock'
import { useDispatch, useSelector } from 'react-redux'
import { addChords, deleteBar, getBar } from '../state/bars'
import { AppDispatch, AppState } from '../state/store'
import { BarModel, ChordSymbol } from '../chartModel'
import { FiPlusSquare, FiTrash2 } from 'react-icons/fi'
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
  background: linear-gradient(0deg, #ededed 0%, #ffffff 100%);
`

const chordsContainerStyle = css`
  display: flex;
  flex: 1;
  flex-direction: row;
  gap: 10px;
  position: relative;
`

const barCountContainerStyle = css`
  display: flex;
  padding: 4px 10px;
  align-items: center;
  justify-content: space-between;
  color: #888;
  font-family: 'Poppins';
  font-size: 1em;
`

const addChordOverlayStyle = css`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  top: 0px;
  right: 0px;
  border-radius: 10px;
  width: 30px;
  height: 100%;
  background-image: linear-gradient(90deg, #ffffff00 0%, #00000040 100%); ;
`

const emptyBarAddButtonStyle = css`
  font-family: 'Poppins';
  font-weight: bold;
  color: #555;
  padding: 0px 15px;
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
  padding: 14px;
  cursor: pointer;
  &:hover {
    color: #222;
  }
`

const addChordCloneStyle = css`
  color: #fff;
`

const addFirstChordStyle = css``

const trashIconStyle = css`
  color: #888;
  cursor: pointer;
`

export const BarBlock: FC<BarBlockProps> = ({
  barId,
  progressionId,
  count,
}) => {
  const [chordsAreaHovered, setChordsAreaHovered] = useState(false)
  const bar = useSelector<AppState, BarModel | undefined>((state) =>
    getBar(state, barId),
  )
  const firstChord = useSelector<AppState, ChordSymbol | undefined>((state) => {
    if (bar?.chords?.length !== 1) {
      return undefined
    }
    const chordId = bar?.chords[0]!
    console.log({ bar, chordId })
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

  const onChordsAreaMouseEnter = () => {
    setChordsAreaHovered(true)
  }
  const onChordsAreaMouseLeave = () => {
    setChordsAreaHovered(false)
  }

  if (!bar) {
    return (
      <div className={barBlockStyle}>
        <div className={chordsContainerStyle}>Bar "{barId}" doesn't exist!</div>
        <div className={barCountContainerStyle}>&#65283;{count}</div>
      </div>
    )
  }

  return (
    <div className={barBlockStyle}>
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
        {bar.chords.length === 1 && chordsAreaHovered ? (
          <div className={addChordOverlayStyle} onClick={onAddSecondChord}>
            <FiPlusSquare className={addChordCloneStyle} />
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
        <FiTrash2 className={trashIconStyle} onClick={onDeleteBar} />
      </div>
    </div>
  )
}
