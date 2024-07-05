import { FC, useMemo } from 'react'
import Select, {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'
import {
  ChordSymbol,
  PitchedNote,
  SelectItem,
  Transition,
} from '../../model/types'
import { TRANSITIONS } from '../../model/constants'
import { canTransition } from '../../model/canTransition'

export type TransitionEditorProps = {
  transitionId: string | undefined
  from: ChordSymbol
  to: ChordSymbol
  tuning: PitchedNote[]
  onChange: (transitionId: string) => void
}

const chordEditorStyle = css`
  display: flex;
  flex-direction: row;
`

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
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

const TRANSITION_ITEMS: SelectItem<Transition>[] = TRANSITIONS.map(
  (value): SelectItem<Transition> => ({ label: value.name, value }),
)

export const TransitionEditor: FC<TransitionEditorProps> = ({
  transitionId,
  from,
  to,
  tuning,
  onChange,
}) => {
  const nameItem = transitionId
    ? TRANSITION_ITEMS.find(({ value }) => value.id === transitionId)
    : undefined

  const availableItems = useMemo<SelectItem<Transition>[]>(() => {
    return TRANSITION_ITEMS.filter(({ value }) =>
      canTransition(from, to, tuning, value),
    )
  }, [from, to, tuning])

  const onTransitionChange = (data: SelectItem<string>): void => {
    onChange(data.value)
  }

  return (
    <div className={chordEditorStyle}>
      <Select
        value={nameItem}
        options={availableItems}
        placeholder="Transition"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onTransitionChange as any}
      />
    </div>
  )
}
