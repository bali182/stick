import { ChangeEvent, FC, useMemo, useState } from 'react'
import { Modal } from '../Modal'
import { css, cx } from '@emotion/css'
import { PiFileLight, PiMusicNotesLight, PiPlusBold } from 'react-icons/pi'
import { IconType } from 'react-icons'
import { AppState } from '../../state/types'
import { useSelector } from 'react-redux'
import { progressionsSlice } from '../../state/progressions'
import { isNil } from '../../model/isNil'

export type NewProjectModalProps = {
  onClose: () => void
}

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`
const headerStyle = css`
  font-size: 1.6em;
  color: #ffffff;
`

const cardsContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

const cardStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  flex: 1;
  width: 300px;
  background-color: #ffffff10;
  gap: 16px;
  padding: 16px;
  cursor: pointer;
  color: #ffffffcc;
  &:hover {
    background-color: #ffffff30;
    color: #ffffff;
  }
`

const selectedCard = css`
  outline: 2px solid #ffffff50;
  background-color: #ffffff30;
  color: #ffffff;
  &:hover {
    outline: 2px solid #ffffff50;
    background-color: #ffffff30;
    color: #ffffff;
  }
`

const cardIconStyle = css`
  font-size: 6em;
`

const cardHeaderStyle = css`
  font-size: 1.6em;
`

const cardDescriptionStyle = css`
  font-size: 1em;
  text-align: center;
`

const controlsContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 14px;
`

const inputStyle = css`
  border-radius: 6px;
  background-color: #ffffff10;
  flex: 1;
  color: #ffffff;
  border: none;
  outline: none;
  padding: 10px 14px;
  font-size: 1em;
  &:hover {
    background-color: #ffffff30;
  }

  &:focus {
    background-color: #ffffff50;
  }
`

const buttonStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffffdd;
  padding: 8px 16px;
  gap: 6px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 6px;
  background-color: transparent;
  background-color: #ffffff10;
  &:hover {
    color: #fff;
    background-color: #ffffff20;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

type ProgressionTemplate = {
  name: string
  Icon: IconType
  description: string
  factory: (name: string) => Partial<AppState>
}

const templates: ProgressionTemplate[] = [
  {
    name: 'From scratch',
    Icon: PiFileLight,
    description: 'Create your own progression from scratch.',
    factory: (name: string): Partial<AppState> => ({}),
  },
  {
    name: 'Pop song',
    Icon: PiMusicNotesLight,
    description: 'Start with a basic pop chord progression TODO find song.',
    factory: (name: string): Partial<AppState> => ({}),
  },
  {
    name: 'Jazz standard',
    Icon: PiMusicNotesLight,
    description: 'Start with the popular standard called, Autumn Leaves.',
    factory: (name: string): Partial<AppState> => ({}),
  },
]

export const NewProjectModal: FC<NewProjectModalProps> = ({ onClose }) => {
  const [name, setName] = useState('')
  const [template, setTemplate] = useState<ProgressionTemplate>()
  const [useAutoName, setUseAutoName] = useState(true)
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const autoName = useMemo(() => {
    const baseName = isNil(template) ? 'Progression' : template.name
    return `${baseName} ${progressions.length + 1}`
  }, [template, progressions])
  return (
    <Modal onBackdropClick={onClose}>
      <div className={contentContainerStyle}>
        <header className={headerStyle}>New progression</header>
        <div className={cardsContainerStyle}>
          {templates.map((t) => {
            const className = cx(
              cardStyle,
              t === template ? selectedCard : null,
            )
            return (
              <div
                className={className}
                key={t.name}
                onClick={() => setTemplate(t)}
              >
                <header className={cardHeaderStyle}>{t.name}</header>
                <t.Icon className={cardIconStyle} />
                <div className={cardDescriptionStyle}>{t.description}</div>
              </div>
            )
          })}
        </div>
        <div className={controlsContainerStyle}>
          <input
            type="text"
            className={inputStyle}
            value={useAutoName ? autoName : name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value)
              setUseAutoName(false)
            }}
            onBlur={() => {
              if (name.length === 0) {
                setUseAutoName(true)
              }
            }}
          />
          <button
            type="button"
            className={buttonStyle}
            disabled={isNil(template)}
          >
            <PiPlusBold /> Create
          </button>
        </div>
      </div>
    </Modal>
  )
}
