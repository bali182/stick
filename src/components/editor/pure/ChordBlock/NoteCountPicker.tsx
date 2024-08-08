import { FC, useState } from 'react'
import { css, cx } from '@emotion/css'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { NoteCountSelectorList } from './NoteCountSelectorList'
import { isNil } from '../../../../model/isNil'

export type NoteCountPickerProps = {
  noteCount?: number
  progressionNoteCount?: number
  onChange: (noteCount: number | undefined) => void
}

const defaultStyle = css`
  cursor: pointer;
  padding: 0px 6px;
  border-radius: 6px;
  color: #ffffffbb;
  border: none;
  background-color: transparent;
  white-space: nowrap;
  &:hover,
  &:focus {
    border: none;
    background-color: #ffffff40;
    color: #ffffff;
  }
`

const nonDefaultStyle = cx(
  defaultStyle,
  css`
    background-color: #ffffff30;
    color: #ffffff;
    font-weight: 500;
    &:hover,
    &:focus {
      border: none;
      background-color: #ffffff40;
      color: #ffffff;
    }
  `,
)

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 160px;
  height: 180px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const NoteCountPicker: FC<NoteCountPickerProps> = ({
  noteCount,
  progressionNoteCount,
  onChange,
}) => {
  const [isOpen, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  const _onChange = (noteCount: number | undefined) => {
    onChange(noteCount)
    onClose()
  }

  const isDefault = isNil(noteCount)
  const noteCountComputed = isDefault ? progressionNoteCount : noteCount
  const style = isDefault ? defaultStyle : nonDefaultStyle

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
            <NoteCountSelectorList
              noteCount={noteCount}
              progressionNoteCount={progressionNoteCount}
              onChange={_onChange}
            />
          </div>
        </ArrowContainer>
      )}
    >
      <button className={style} onClick={onOpen} tabIndex={-1}>
        {noteCountComputed} Notes
      </button>
    </Popover>
  )
}
