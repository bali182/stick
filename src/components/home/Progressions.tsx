import { css, cx } from '@emotion/css'
import { ChangeEvent, FC, useMemo, useState } from 'react'
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

const containerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 12px 20px 20px 20px;
  border-radius: 10px;
  background-color: #ffffff15;
`

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
  margin-top: 10px;
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
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  if (progressions.length === 0) {
    return null
  }
  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>Recent progressions</h2>
      {progressions.map((p) => (
        <a className={itemStyle} href={`#/${p.id}/editor`} key={p.id}>
          <PiMusicNotesLight className={iconStyle} />
          <div className={labelContainer}>
            <span className={nameStyle}>{p.name}</span>
            <span className={detailStyle}>{p.bars.length} Bars</span>
          </div>
        </a>
      ))}
    </div>
  )
}

export const NewProgression: FC = () => {
  const [name, setName] = useState('')
  const [template, setTemplate] = useState<TemplateDescriptor>()
  const [useAutoName, setUseAutoName] = useState(true)
  const appState = useSelector<AppState, AppState>((state) => state)
  const navigate = useNavigate()
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)
  const autoName = useMemo(() => {
    const baseName = isNil(template) ? '' : template.name
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
    dispatch(createProgressionFromTemplate({ template: projectTemplate }))
    navigate(Paths.editor(projectTemplate.progression.id))
  }

  return (
    <div className={containerStyle}>
      <h2 className={titleStyle}>New progression</h2>
      {templates.map((t) => {
        const cls = cx(itemStyle, t === template ? selectedStyle : null)
        return (
          <div className={cls} key={t.name} onClick={() => setTemplate(t)}>
            <t.Icon className={iconStyle} />
            <div className={labelContainer}>
              <span className={nameStyle}>{t.name}</span>
              <span className={detailStyle}>{t.description}</span>
            </div>
          </div>
        )
      })}
      <div className={controlsContainerStyle}>
        <input
          type="text"
          placeholder="Progression name..."
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
  )
}
