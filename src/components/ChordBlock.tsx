import { FC, useState } from 'react'
import { css } from '@emotion/css'
import uniqolor from 'uniqolor'
import { getChordSymbolName } from '../getChordSymbolName'
import { Popover } from 'react-tiny-popover'
import { PopoverContent } from './PopoverContent'
import { ChordEditor } from './ChordEditor'
import { STRATEGY_MAP } from '../strategies/strategies'
import { ChordSymbol } from '../chartModel'
import { TransitionEditor } from './TransitionEditor'

export type BarBlockProps = {
  chord: ChordSymbol
}

const chordBlockStyle = (chord: ChordSymbol) => {
  const color = uniqolor(getChordSymbolName(chord), {
    format: 'hex',
    lightness: 45,
  })
  return css`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    background-color: ${color.color};
    border-radius: 10px;
    gap: 10px;
    padding: 14px;
  `
}
const chordNameStyle = css`
  font-family: 'Poppins';
  font-weight: bold;
  color: #ffffffde;
  width: 100%;
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
  font-family: 'Poppins';
  color: #ffffffdd;
  font-size: 1.2em;
  border-radius: 6px;
  padding: 4px 10px;
  cursor: pointer;
  background-color: #ffffff30;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
  &:hover {
    background-color: #ffffff40;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`

export const ChordBlock: FC<BarBlockProps> = ({ chord }) => {
  const transition = chord.path ? STRATEGY_MAP[chord.path] : undefined
  const [isChordPickerOpen, setChordPickerOpen] = useState(false)
  const [isTypePickerOpen, setTypePickerOpen] = useState(false)
  const toggleChordPicker = () => setChordPickerOpen(!isChordPickerOpen)
  const closeChordPicker = () => setChordPickerOpen(false)

  const toggleTypePicker = () => setTypePickerOpen(!isTypePickerOpen)
  const closeTypePicker = () => setTypePickerOpen(false)

  return (
    <div className={chordBlockStyle(chord)}>
      <Popover
        isOpen={isChordPickerOpen}
        onClickOutside={closeChordPicker}
        clickOutsideCapture={true}
        positions={['bottom', 'right', 'left']}
        content={(props) => (
          <PopoverContent {...props}>
            <ChordEditor chord={chord} onChange={() => {}} />
          </PopoverContent>
        )}
      >
        <div onClick={toggleChordPicker} className={chordNameStyle}>
          {getChordSymbolName(chord)}
        </div>
      </Popover>
      <div></div>
      <Popover
        isOpen={isTypePickerOpen}
        onClickOutside={closeTypePicker}
        clickOutsideCapture={true}
        positions={['bottom', 'right', 'left']}
        content={(props) => (
          <PopoverContent {...props}>
            <TransitionEditor transitionId={chord.path} onChange={() => {}} />
          </PopoverContent>
        )}
      >
        <div onClick={toggleTypePicker} className={pathStyle}>
          {transition?.name ?? '+ Transition'}
        </div>
      </Popover>
    </div>
  )
}
