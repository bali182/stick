import { FC, useMemo, useState } from 'react'
import { css } from '@emotion/css'
import uniqolor from 'uniqolor'
import { Popover } from 'react-tiny-popover'
import { PopoverContent } from './PopoverContent'
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

export type ChordBlockProps = {
  progressionId: string
  barId: string
  chordId: string
}

const chordBlockStyle = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  border-radius: 10px;
  gap: 10px;
  padding: 14px;
  position: relative;
`

const chordNameStyle = css`
  font-weight: bold;
  color: #ffffffde;
  padding: 0px 15px;
  font-size: 2em;
  text-align: center;
  text-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
  transition: text-shadow 0.2s ease, color 0.2s ease;
  user-select: none;
  cursor: pointer;
  &:hover {
    color: #ffffffff;
    text-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }
`
const trashIconStyle = css`
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
  color: #ffffffbb;
  &:hover {
    color: #ffffff;
  }
`

export const ChordBlock: FC<ChordBlockProps> = ({
  progressionId,
  barId,
  chordId,
}) => {
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )
  const nextChord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId, barId, chordId),
  )
  const dispatch = useDispatch<AppDispatch>()
  const [isChordPickerOpen, setChordPickerOpen] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const toggleChordPicker = () => setChordPickerOpen(!isChordPickerOpen)
  const closeChordPicker = () => setChordPickerOpen(false)

  const onChordChange = (chord: ChordSymbol) => {
    dispatch(chordsSlice.actions.updateChord({ chord }))
  }
  const onChordDeleted = () => {
    dispatch(barsSlice.actions.removeChords({ barId, chordIds: [chordId] }))
    dispatch(chordsSlice.actions.deleteChord({ chordId }))
  }

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)

  const background = useMemo(
    () =>
      uniqolor(getChordSymbolName(chord), {
        format: 'hex',
        lightness: 40,
      }).color,
    [chord],
  )

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
      {isHovered ? (
        <FiTrash2 className={trashIconStyle} onClick={onChordDeleted} />
      ) : null}
      <Popover
        isOpen={isChordPickerOpen}
        onClickOutside={closeChordPicker}
        clickOutsideCapture={true}
        positions={['bottom', 'top', 'right', 'left']}
        content={(props) => (
          <PopoverContent {...props}>
            <ChordEditor chord={chord} onChange={onChordChange} />
          </PopoverContent>
        )}
      >
        <div onClick={toggleChordPicker} className={chordNameStyle}>
          <span>{getChordSymbolName(chord)}</span>
        </div>
      </Popover>
      {nextChord !== undefined ? (
        <TransitionButton
          barId={barId}
          chordId={chordId}
          progressionId={progressionId}
        />
      ) : null}
    </div>
  )
}
