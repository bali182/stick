import { FC, useState } from 'react'
import { css } from '@emotion/css'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { PitchedNote } from '../../../../model/types'
import { RootSelectorList } from './RootSelectorList'

export type RootPickerProps = {
  root: PitchedNote
  values: PitchedNote[]
  onChange: (root: PitchedNote) => void
}

const rootPickerStyle = css`
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

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 160px;
  height: 140px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const RootPicker: FC<RootPickerProps> = ({ root, values, onChange }) => {
  const [isOpen, setOpen] = useState(false)
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)

  const _onChange = (root: PitchedNote) => {
    onChange(root)
    onClose()
  }

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
            <RootSelectorList
              values={values}
              root={root}
              onChange={_onChange}
            />
          </div>
        </ArrowContainer>
      )}
    >
      <button className={rootPickerStyle} onClick={onOpen}>
        Root: {root}
      </button>
    </Popover>
  )
}
