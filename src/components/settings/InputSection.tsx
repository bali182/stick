import { css } from '@emotion/css'
import { ComponentType, FC, useMemo } from 'react'
import { EditorProps } from './types'
import { nanoid } from 'nanoid'

export type InputSectionProps<T> = {
  name: string
  value: T
  onChange: (value: T) => void
  Editor: ComponentType<EditorProps<T>>
}

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px;
  pointer-events: auto;
`

const labelStyle = css`
  font-size: 1em;
  color: #ffffff;
  pointer-events: auto;
`

export function InputSection<T>({
  Editor,
  name,
  value,
  onChange,
}: InputSectionProps<T>) {
  const id = useMemo(() => {
    const lcname = name.toLowerCase().replace(/^\W/gi, '').replace(/\s+/g, '-')
    return `${lcname}-${nanoid()}`
  }, [name])

  return (
    <div className={sectionStyle}>
      <label className={labelStyle} htmlFor={id}>
        {name}
      </label>
      <Editor id={id} value={value} onChange={onChange} />
    </div>
  )
}
