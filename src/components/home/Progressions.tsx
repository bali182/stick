import { css, cx } from '@emotion/css'
import {
  ChangeEvent,
  FC,
  KeyboardEvent,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { progressionsSlice } from '../../state/progressions'
import { PiMusicNotesLight } from 'react-icons/pi'
import { useDispatch, useSelector } from 'react-redux'
import { PiPlusBold } from 'react-icons/pi'
import { AppState } from '../../state/types'
import { isNil } from '../../model/isNil'
import { AppDispatch } from '../../state/store'
import { getUniqueName } from '../../model/utils'
import { useNavigate } from 'react-router'
import { Paths } from '../paths'
import { TemplateDescriptor } from './types'
import { templates } from './templates'
import { createProgressionFromTemplate } from '../../state/actionCreators'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  border-radius: 10px;
  background-color: #ffffff15;
`

const baseContentContainerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`

const recentsContentContainerStyle = cx(
  baseContentContainerStyle,
  css`
    padding: 12px 20px 20px 20px;
  `,
)

const newContentContainerStyle = cx(
  baseContentContainerStyle,
  css`
    padding: 12px 20px 0px 20px;
  `,
)

const titleStyle = css`
  font-size: 1.6em;
  color: #fff;
  font-weight: normal;
`

const itemStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 10px 14px;
  cursor: pointer;
  gap: 10px;
  width: 100%;
  &:hover {
    background-color: #ffffff30;
  }
`

const selectedStyle = css`
  outline: 2px solid #ffffff50;
  background-color: #ffffff30;
  color: #ffffff;
  &:hover {
    outline: 2px solid #ffffff50;
    background-color: #ffffff30;
    color: #ffffff;
  }
`

const iconStyle = css`
  font-size: 2em;
  color: #ffffff;
`
const labelContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const nameStyle = css`
  color: #ffffff;
`

const detailStyle = css`
  color: #ffffff88;
`

const controlsContainerStyle = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
  background-color: #ffffff10;
  padding: 20px;
`

const inputStyle = css`
  border-radius: 6px;
  background-color: #ffffff20;
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
    background-color: #ffffff40;
  }

  &:disabled {
    background-color: #ffffff08;
    color: #ffffff50;
    cursor: not-allowed;
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
  background-color: #ffffff20;
  &:hover {
    color: #fff;
    background-color: #ffffff30;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

export const RecentProgressions: FC = () => {
  const { t } = useTranslation()
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  if (progressions.length === 0) {
    return null
  }
  return (
    <div className={containerStyle}>
      <div className={recentsContentContainerStyle}>
        <h2 className={titleStyle}>{t('Home.RecentProgressions')}</h2>
        {progressions.map((p) => (
          <Link to={Paths.editor(p.id)} className={itemStyle} key={p.id}>
            <PiMusicNotesLight className={iconStyle} />
            <div className={labelContainer}>
              <span className={nameStyle}>{p.name}</span>
              <span className={detailStyle}>
                {p.bars.length} {t('Home.Bars')}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const NewProgression: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const { t } = useTranslation()
  const [name, setName] = useState('')
  const [templateClicked, setTemplateClicked] = useState(false)
  const [template, setTemplate] = useState<TemplateDescriptor>()
  const [useAutoName, setUseAutoName] = useState(true)
  const appState = useSelector<AppState, AppState>((state) => state)
  const navigate = useNavigate()
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const hasTemplateSelected = isNil(template)

  const dispatch = useDispatch<AppDispatch>()

  const autoName = useMemo(() => {
    const baseName = isNil(template) ? '' : template.name
    return getUniqueName(
      baseName,
      new Set(progressions.map(({ name }) => name)),
      ' ',
    )
  }, [template, progressions])

  useEffect(() => {
    if (templateClicked) {
      const { current: input } = inputRef
      if (!isNil(input)) {
        input.select()
        input.focus()
      }
      setTemplateClicked(false)
    }
  }, [templateClicked])

  const onCreateProject = () => {
    if (isNil(template)) {
      return
    }
    const progressionName = name.length === 0 || useAutoName ? autoName : name
    const templateWithIds = template.factory(progressionName, appState)
    dispatch(createProgressionFromTemplate({ template: templateWithIds }))
    navigate(Paths.editor(templateWithIds.progression.id))
  }

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setUseAutoName(false)
  }

  const onBlur = () => {
    if (name.length === 0) {
      setUseAutoName(true)
    }
  }

  const onTemplateClick = (template: TemplateDescriptor) => () => {
    setTemplate(template)
    setTemplateClicked(true)
  }

  return (
    <div className={containerStyle}>
      <div className={newContentContainerStyle}>
        <h2 className={titleStyle}>{t('Home.NewProgression')}</h2>
        {templates.map((t) => {
          const cls = cx(itemStyle, t === template ? selectedStyle : null)
          return (
            <div className={cls} key={t.name} onClick={onTemplateClick(t)}>
              <t.Icon className={iconStyle} />
              <div className={labelContainer}>
                <span className={nameStyle}>{t.name}</span>
                <span className={detailStyle}>{t.description}</span>
              </div>
            </div>
          )
        })}
      </div>
      <div className={controlsContainerStyle}>
        <input
          ref={inputRef}
          type="text"
          placeholder={t('Home.ProgressionName')}
          className={inputStyle}
          disabled={hasTemplateSelected}
          value={useAutoName ? autoName : name}
          onChange={onNameChange}
          onBlur={onBlur}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === 'Enter') {
              onCreateProject()
            }
          }}
        />
        <button
          type="button"
          className={buttonStyle}
          disabled={hasTemplateSelected}
          onClick={onCreateProject}
        >
          <PiPlusBold /> {t('Home.Create')}
        </button>
      </div>
    </div>
  )
}
