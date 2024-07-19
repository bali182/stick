import { FC, useState } from 'react'
import { useSelector } from 'react-redux'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'
import { AppState } from '../../state/types'
import { ChordSymbol } from '../../model/types'
import { chordsSlice } from '../../state/chords'
import { css } from '@emotion/css'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { NoteCountSelectorList } from './NoteCountSelectorList'

export type NoteCountPickerProps = {
  chordId: string
}

const noteCountPickerStyle = css`
  cursor: pointer;
  color: #ffffffbb;
  &:hover {
    color: #ffffff;
  }
`

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 280px;
  height: 140px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const NoteCountPicker: FC<NoteCountPickerProps> = ({ chordId }) => {
  const [isOpen, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  const progression = useSelector(getActiveProgression)
  const chord = useSelector<AppState, ChordSymbol | undefined>((state) =>
    chordsSlice.selectors.getChord(state, chordId),
  )
  const noteCount = chord?.noteCount ?? progression?.noteCount!

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={onClose}
      clickOutsideCapture={true}
      positions={['bottom', 'right', 'left']}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="#181818"
          arrowSize={10}
        >
          <div className={popoverStyle}>
            <NoteCountSelectorList setOpen={setOpen} chordId={chordId} />
          </div>
        </ArrowContainer>
      )}
    >
      <span className={noteCountPickerStyle} onClick={onOpen}>
        {noteCount} Notes
      </span>
    </Popover>
  )
}
