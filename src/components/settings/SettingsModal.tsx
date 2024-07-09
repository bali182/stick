import { css, cx } from '@emotion/css'
import { nanoid } from 'nanoid'
import { ComponentType, FC, MouseEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { IconType } from 'react-icons'
import {
  PiGearFill,
  PiMusicNoteFill,
  PiMusicNoteSimple,
  PiX,
} from 'react-icons/pi'

export type ModalProps = {
  onBackdropClick: () => void
  onClose: () => void
}

const backdropStyle = css`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(30px);
  background-color: #00000005;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`

const modalStyle = css`
  background-color: #1c1c1c;
  border-radius: 14px;
  user-select: text;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 500px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`

const menuStyle = css`
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  background-color: #ffffff10;
  min-width: 200px;
`

const menuHeaderStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
  color: #ffffff;
  gap: 10px;
  padding: 14px 18px;
`

const headerIconStyle = css`
  position: relative;
  top: 1px;
`

const menuContainerStyle = css`
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  padding: 14px 0px;
`

const menuItemStlye = css`
  display: flex;
  align-items: center;
  color: #ffffffcc;
  font-size: 1.2em;
  gap: 10px;
  padding: 10px 18px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: #ffffff10;
  }
`

const activeMenuItemStyle = css`
  background-color: #ffffff20;
  color: #ffffff;
  &:hover {
    color: #ffffff;
    background-color: #ffffff20;
  }
`

const contentStyle = css`
  flex: 1;
  min-width: 400px;
`

const contentTitleStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`

const contentHeaderStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 1.4em;
  font-weight: bold;
  color: #ffffff;
  padding: 14px;
`

const closeIconStyle = css`
  font-size: 1.4em;
  color: #ffffff;
  cursor: pointer;
`

const contentContainerStyle = css``

const MODAL_ROOT = document.getElementById('modal')!

type ModalEditor = {
  id: string
  name: string
  Icon: IconType
  Component: ComponentType<{}>
}

const editors: ModalEditor[] = [
  {
    id: nanoid(),
    name: 'Tuning',
    Icon: PiMusicNoteSimple,
    Component: () => <div>Tuning editor</div>,
  },
  {
    id: nanoid(),
    name: 'Preferences',
    Icon: PiMusicNoteSimple,
    Component: () => <div>Preferences editor</div>,
  },
  {
    id: nanoid(),
    name: 'Test',
    Icon: PiMusicNoteSimple,
    Component: () => <div>Test editor</div>,
  },
]

export const SettingsModal: FC<ModalProps> = ({ onBackdropClick, onClose }) => {
  const [activeEditor, setActiveEditor] = useState<ModalEditor>(editors[0]!)
  const stopPropagation = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }
  return createPortal(
    <div className={backdropStyle} onClick={onBackdropClick}>
      <div onClick={stopPropagation} className={modalStyle}>
        <div className={menuStyle}>
          <header className={menuHeaderStyle}>
            <PiGearFill className={headerIconStyle} /> Settings
          </header>
          <div className={menuContainerStyle}>
            {editors.map((e) => {
              const { id, name, Icon } = e
              const className = cx(
                menuItemStlye,
                id === activeEditor.id ? activeMenuItemStyle : null,
              )
              const onClick = () => setActiveEditor(e)
              return (
                <div key={id} className={className} onClick={onClick}>
                  <Icon /> {name}
                </div>
              )
            })}
          </div>
        </div>
        <div className={contentStyle}>
          <header className={contentHeaderStyle}>
            <div className={contentTitleStyle}>
              <activeEditor.Icon /> {activeEditor.name}
            </div>
            <PiX className={closeIconStyle} onClick={onClose} />
          </header>
          <div className={contentContainerStyle}>
            {<activeEditor.Component />}
          </div>
        </div>
      </div>
    </div>,
    MODAL_ROOT,
  )
}
