import { FC, useState } from 'react'
import { css } from '@emotion/css'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { ChordEditor } from './ChordEditor'
import { ChordSymbol } from '../../model/types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { FiTrash2 } from 'react-icons/fi'
import { getNextChord } from '../../state/selectors/getNextChord'
import { TransitionButton } from './TransitionButton'
import { isNil } from '../../model/isNil'
import { AppState } from '../../state/types'
import { chordsSlice } from '../../state/chords'
import { barsSlice } from '../../state/bars'
import { getChordSymbolName } from '../../model/getChordSymbolName'
import { useOnEscape } from './useOnEscape'
import { NOTE_COLORS } from '../colors'
import { NoteCountPicker } from './NoteCountPicker'
import {
  useActiveProgression,
  useBar,
  useChord,
  useNextChord,
} from '../../modelHooks'

export type ChordBlockProps = {
  barId: string
  chordId: string
}

const chordBlockStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  border-radius: 10px;
  height: 138px;
  padding: 12px 14px 8px 14px;
`

const headerStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`
const contentStyle = css`
  position: relative;
  top: -10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const chordNameStyle = css`
  font-weight: bold;
  color: #ffffffde;
  padding: 0px 15px;
  font-size: 2em;
  text-align: center;
  text-shadow: 0px 0px 0px transparent;
  transition: text-shadow 0.2s ease, color 0.2s ease;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ffffffff;
    text-shadow: 0px 6px 8px #00000040;
  }
`
const trashIconStyle = css`
  cursor: pointer;
  color: #ffffffbb;
  &:hover {
    color: #ffffff;
  }
`

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  padding: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const ChordBlock: FC<ChordBlockProps> = ({ barId, chordId }) => {
  const progression = useActiveProgression()
  const chord = useChord(chordId)
  const bar = useBar(barId)
  const nextChord = useNextChord(progression?.id!, barId, chordId)
  const dispatch = useDispatch<AppDispatch>()
  const [isChordPickerOpen, setChordPickerOpen] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const toggleChordPicker = () => setChordPickerOpen(!isChordPickerOpen)
  const closeChordPicker = () => setChordPickerOpen(false)

  const onChordChange = (chord: ChordSymbol) => {
    dispatch(chordsSlice.actions.updateChord({ chord }))
  }
  const onChordDeleted = () => {
    if (isNil(bar) || isNil(chord)) {
      return
    }
    const otherChords = bar.chords.filter((id) => id !== chordId)
    otherChords.forEach((id) => {
      dispatch(
        chordsSlice.actions.updateChord({
          chord: { id, noteCount: undefined },
        }),
      )
    })
    dispatch(barsSlice.actions.removeChords({ barId, chordIds: [chordId] }))
    dispatch(chordsSlice.actions.deleteChord({ chordId }))
  }

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)

  const background = chord?.name ? NOTE_COLORS[chord?.name] : 'transparent'

  useOnEscape(closeChordPicker, isChordPickerOpen)

  if (isNil(chord)) {
    return (
      <div className={chordBlockStyle} style={{ background }}>
        <div className={chordNameStyle}>{getChordSymbolName(chord)}</div>
      </div>
    )
  }

  return (
    <div
      className={chordBlockStyle}
      style={{ background }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={headerStyle}>
        <FiTrash2
          className={trashIconStyle}
          style={{ visibility: isHovered ? 'visible' : 'hidden' }}
          onClick={onChordDeleted}
        />
        <NoteCountPicker chordId={chordId} />
      </div>
      <div className={contentStyle}>
        <Popover
          isOpen={isChordPickerOpen}
          onClickOutside={closeChordPicker}
          clickOutsideCapture={true}
          positions={['bottom', 'top', 'right', 'left']}
          content={({ position, childRect, popoverRect }) => (
            <ArrowContainer
              position={position}
              childRect={childRect}
              popoverRect={popoverRect}
              arrowColor="#181818"
              arrowSize={10}
            >
              <div className={popoverStyle}>
                <ChordEditor chord={chord} onChange={onChordChange} />
              </div>
            </ArrowContainer>
          )}
        >
          <div onClick={toggleChordPicker} className={chordNameStyle}>
            <span>{getChordSymbolName(chord)}</span>
          </div>
        </Popover>
        {nextChord !== undefined ? (
          <TransitionButton barId={barId} chordId={chordId} />
        ) : null}
      </div>
    </div>
  )
}
