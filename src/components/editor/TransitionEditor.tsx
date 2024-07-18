import { FC, useMemo } from 'react'
import {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'
import { ChordSymbol, PitchedNote, Transition } from '../../model/types'
import { TRANSITIONS } from '../../model/constants'
import { canTransition } from '../../model/canTransition'
import { DropdownProxy } from '../DropdownProxy'

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

const getLabel = ({ name }: Transition) => name

export const TransitionEditor: FC<TransitionEditorProps> = ({
  transitionId,
  from,
  to,
  tuning,
  onChange,
}) => {
  const transition = transitionId
    ? TRANSITIONS.find(({ id }) => id === transitionId)
    : undefined

  const availableTransitions = useMemo<Transition[]>(
    () => TRANSITIONS.filter((trns) => canTransition(from, to, tuning, trns)),
    [from, to, tuning],
  )

  const onTransitionChange = (data: Transition): void => {
    onChange(data.id)
  }

  return (
    <div className={chordEditorStyle}>
      <DropdownProxy
        value={transition}
        values={availableTransitions}
        placeholder="Transition"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onTransitionChange as any}
        getLabel={getLabel}
      />
    </div>
  )
}
