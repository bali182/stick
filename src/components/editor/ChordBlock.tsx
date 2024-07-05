import { FC, useMemo, useState } from 'react'
import { css } from '@emotion/css'
import uniqolor from 'uniqolor'
import { getChordSymbolName } from '../../model/getChordSymbolName'
import { Popover } from 'react-tiny-popover'
import { PopoverContent } from './PopoverContent'
import { ChordEditor } from './ChordEditor'
import { ChordSymbol, PitchedNote, Transition } from '../../model/types'
import { TransitionEditor } from './TransitionEditor'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../state/store'
import { deleteChord, getChord, updateChord } from '../../state/chords'
import { FiTrash2 } from 'react-icons/fi'
import { RiFootprintFill } from 'react-icons/ri'
import { removeChords } from '../../state/bars'
import { getNextChord } from '../../state/getNextChord'
import { TRANSITION_MAP } from '../../model/constants'
import { getTuning } from '../../state/config'

export type BarBlockProps = {
  progressionId: string
  barId: string
  chordId: string
}

const chordBlockStyle = (color: string) => {
  return css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    background-color: ${color};
    border-radius: 10px;
    gap: 10px;
    padding: 14px;
    position: relative;
  `
}

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
const pathStyle = css`
  color: #ffffffdd;
  font-size: 1.2em;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  &:hover {
    background-color: #ffffff40;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

const trashIconStyle = css`
  color: #fff;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 10px;
`

const addTransitionIconStyle = css`
  color: #fff;
  cursor: pointer;
  position: relative;
  display: inline;
  top: 3px;
`

export const ChordBlock: FC<BarBlockProps> = ({
  progressionId,
  barId,
  chordId,
}) => {
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getChord(state, chordId),
  )
  const tuning = useSelector<AppState, PitchedNote[]>(getTuning)
  const nextChord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    getNextChord(state, progressionId, barId, chordId),
  )
  const dispatch = useDispatch<AppDispatch>()
  const transition = chord?.transitionId
    ? TRANSITION_MAP[chord.transitionId]
    : undefined
  const [isChordPickerOpen, setChordPickerOpen] = useState(false)
  const [isTransitionPickerOpen, setTransitionPickerOpen] = useState(false)
  const [isHovered, setHovered] = useState(false)

  const toggleChordPicker = () => setChordPickerOpen(!isChordPickerOpen)
  const closeChordPicker = () => setChordPickerOpen(false)

  const toggleTransitionPicker = () =>
    setTransitionPickerOpen(!isTransitionPickerOpen)
  const closeTransitionPicker = () => setTransitionPickerOpen(false)

  const onChordChange = (chord: ChordSymbol) => {
    dispatch(updateChord({ chord }))
  }
  const onTransitionChange = (t: Transition) => {
    dispatch(updateChord({ chord: { id: chordId, transitionId: t.id } }))
    closeTransitionPicker()
  }
  const onChordDeleted = () => {
    dispatch(removeChords({ barId, chordIds: [chordId] }))
    dispatch(deleteChord({ chordId }))
  }

  const onMouseEnter = () => setHovered(true)
  const onMouseLeave = () => setHovered(false)

  const color = useMemo(
    () =>
      uniqolor(getChordSymbolName(chord), {
        format: 'hex',
        lightness: 40,
      }).color,
    [chord],
  )

  if (!chord) {
    return (
      <div className={chordBlockStyle(color)}>
        <div className={chordNameStyle}>{getChordSymbolName(chord)}</div>
        <div className={pathStyle}>-</div>
      </div>
    )
  }

  return (
    <div
      className={chordBlockStyle(color)}
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
        <Popover
          isOpen={isTransitionPickerOpen}
          onClickOutside={closeTransitionPicker}
          clickOutsideCapture={true}
          positions={['bottom', 'right', 'left']}
          content={(props) => (
            <PopoverContent {...props}>
              <TransitionEditor
                from={chord}
                to={nextChord}
                tuning={tuning}
                transitionId={chord.transitionId}
                onChange={onTransitionChange as any}
              />
            </PopoverContent>
          )}
        >
          <div onClick={toggleTransitionPicker} className={pathStyle}>
            {transition?.name ?? (
              <>
                <RiFootprintFill className={addTransitionIconStyle} /> Walk
              </>
            )}
          </div>
        </Popover>
      ) : null}
    </div>
  )
}
