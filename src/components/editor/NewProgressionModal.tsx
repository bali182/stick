import { ChangeEvent, FC, useMemo, useState } from 'react'
import { Modal } from '../Modal'
import { css, cx } from '@emotion/css'
import { PiFileLight, PiMusicNotesLight, PiPlusBold, PiX } from 'react-icons/pi'
import { IconType } from 'react-icons'
import { AppState, ProgressionTemplate } from '../../state/types'
import { useDispatch, useSelector } from 'react-redux'
import { progressionsSlice } from '../../state/progressions'
import { isNil } from '../../model/isNil'
import { withUniqueIds } from '../../state/templates/withUniqueIds'
import { autumnLeavesTemplate } from '../../state/templates/autumnLeavesTemplate'
import { emptyTemplate } from '../../state/templates/emptyTemplate'
import { AppDispatch } from '../../state/store'
import { CreateProgressionFromTemplateAction } from '../../state/actionTypes'
import { configSlice } from '../../state/config'
import { aMinorBlues } from '../../state/templates/aMinorBlues'
import { getUniqueName } from '../../model/utils'
import { useNavigate } from 'react-router'
import { Paths } from '../paths'
import { createProgressionFromTemplate } from '../../state/actionCreators'
import { templates } from '../home/templates'

export type NewProgressionModalProps = {
  onClose: () => void
  canClose: boolean
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const closeIconStyle = css`
  font-size: 1.4em;
  color: #ffffff;
  cursor: pointer;
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

type TemplateDescriptor = {
  name: string
  Icon: IconType
  description: string
  factory: (name: string, state: AppState) => ProgressionTemplate
}

export const NewProgressionModal: FC<NewProgressionModalProps> = ({
  onClose,
  canClose,
}) => {
  const [name, setName] = useState('')
  const [template, setTemplate] = useState<TemplateDescriptor>()
  const [useAutoName, setUseAutoName] = useState(true)
  const appState = useSelector<AppState, AppState>((state) => state)
  const navigate = useNavigate()
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const autoName = useMemo(() => {
    const baseName = isNil(template) ? 'Progression' : template.name
    return getUniqueName(
      baseName,
      new Set(progressions.map(({ name }) => name)),
      ' ',
    )
  }, [template, progressions])
  const dispatch = useDispatch<AppDispatch>()
  const onCreateProject = () => {
    if (isNil(template)) {
      return
    }
    const projectTemplate = template.factory(
      useAutoName ? autoName : name,
      appState,
    )
    const action: CreateProgressionFromTemplateAction = {
      type: 'global/createProgressionFromTemplate',
      payload: { template: projectTemplate },
    }
    dispatch(createProgressionFromTemplate({ template: projectTemplate }))
    navigate(Paths.editor(projectTemplate.progression.id))

    if (canClose) {
      onClose()
    }
  }

  return (
    <Modal onBackdropClick={onClose}>
      <div className={contentContainerStyle}>
        <header className={headerStyle}>
          <span>New progression</span>
          {canClose && <PiX className={closeIconStyle} onClick={onClose} />}
        </header>
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
            onClick={onCreateProject}
          >
            <PiPlusBold /> Create
          </button>
        </div>
      </div>
    </Modal>
  )
}
