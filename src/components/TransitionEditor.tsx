import { FC } from 'react'
import {
  ChordSymbol,
  ChordType,
  NoteName,
  SelectItem,
  Transition,
} from '../types'
import Select, {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'

export type TransitionEditorProps = {
  transition: Transition
  onChange: (transition: Transition) => void
}

const chordEditorStyle = css`
  display: flex;
  flex-direction: row;
`

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  fontFamily: 'Poppins',
  fontSize: '1.2em',
})

const baseProps: StylesConfig = {
  input: fontChangeProps,
  singleValue: fontChangeProps,
  menuList: fontChangeProps,
  placeholder: fontChangeProps,
  control: (provided): CSSObjectWithLabel => ({
    ...provided,
    borderWidth: '0px',
    boxShadow: 'none',
  }),
}

const leftSelectStyles: StylesConfig = {
  ...baseProps,
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const overrideComponents: SelectComponentsConfig<any, any, any> = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
}

export const ChordEditor: FC<TransitionEditorProps> = ({
  transition,
  onChange,
}) => {
  const nameItem: SelectItem<Transition> = {
    label: transition.name,
    value: transition,
  }

  const onTransitionChange = (data: SelectItem<Transition>): void => {
    onChange(data.value)
  }

  return (
    <div className={chordEditorStyle}>
      <Select
        value={nameItem}
        options={[]}
        placeholder="Transition"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onTransitionChange as any}
      />
    </div>
  )
}
