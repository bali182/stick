import { FC } from 'react'
import { SelectItem, Transition } from '../types'
import Select, {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'
import { STRATEGIES } from '../strategies/strategies'

export type TransitionEditorProps = {
  transitionId: string | undefined
  onChange: (transitionId: string) => void
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
    minWidth: '180px',
  }),
}

const overrideComponents: SelectComponentsConfig<any, any, any> = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
}

const TRANSITIONS: SelectItem<string>[] = STRATEGIES.map(
  ({ id, name }): SelectItem<string> => ({ label: name, value: id }),
)
console.log(TRANSITIONS)

export const TransitionEditor: FC<TransitionEditorProps> = ({
  transitionId,
  onChange,
}) => {
  const nameItem = transitionId
    ? TRANSITIONS.find(({ value }) => value === transitionId)
    : undefined

  const onTransitionChange = (data: SelectItem<string>): void => {
    onChange(data.value)
  }

  return (
    <div className={chordEditorStyle}>
      <Select
        value={nameItem}
        options={TRANSITIONS}
        placeholder="Transition"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onTransitionChange as any}
      />
    </div>
  )
}
