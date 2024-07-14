import { FC, useMemo } from 'react'
import { EditorProps } from './types'
import Select, {
  CSSObjectWithLabel,
  SelectComponentsConfig,
  StylesConfig,
} from 'react-select'
import { SelectItem } from '../../model/types'

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  fontSize: '1em',
  color: '#ffffff',
})

const baseStyles: StylesConfig = {
  input: fontChangeProps,
  singleValue: fontChangeProps,
  menuList: (provided): CSSObjectWithLabel => ({
    ...fontChangeProps(provided),
    backgroundColor: '#181818',
  }),
  placeholder: fontChangeProps,
  control: (provided): CSSObjectWithLabel => ({
    ...provided,
    borderWidth: '0px',
    boxShadow: 'none',
    padding: '3px 6px',
    borderRadius: '6px',
    backgroundColor: '#ffffff10',
    ':hover': {
      backgroundColor: '#ffffff30',
    },
    ':focus': {
      backgroundColor: '#ffffff50',
    },
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    backgroundColor: isSelected
      ? '#ffffff40'
      : isFocused
      ? '#ffffff30'
      : 'transparent',
    ':active': {
      backgroundColor: '#ffffff30',
    },
  }),
}

const styles: StylesConfig = {
  ...baseStyles,
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const overrideComponents: SelectComponentsConfig<any, any, any> = {
  IndicatorSeparator: () => null,
}

function wrap(input: string): SelectItem<string> {
  return { label: input, value: input }
}

export const MultiDropdown: FC<
  EditorProps<string[], { values: string[] | undefined }>
> = ({ id, value, data, onChange }) => {
  const _onChange = (e: SelectItem<string>[]) => {
    onChange(e.map(({ value }) => value))
  }
  const wrappedValues = useMemo(
    () => (data?.values ?? []).map(wrap),
    [data?.values],
  )
  const selectedValues = useMemo(() => (value ?? []).map(wrap), [value])

  return (
    <Select
      isMulti={true}
      inputId={id}
      value={selectedValues}
      options={wrappedValues}
      styles={styles}
      components={overrideComponents}
      autoFocus={true}
      onChange={_onChange as any}
    />
  )
}

export const Dropdown: FC<
  EditorProps<string, { values: string[] | undefined }>
> = ({ id, value, data, onChange }) => {
  const _onChange = (e: SelectItem<string>) => {
    onChange(e.value)
  }
  const wrappedValues = useMemo(
    () => (data?.values ?? []).map(wrap),
    [data?.values],
  )
  const wrappedValue = useMemo(() => {
    return wrappedValues.find((v) => v.value === value)
  }, [wrappedValues, value])

  return (
    <Select
      inputId={id}
      value={wrappedValue}
      options={wrappedValues}
      styles={styles}
      components={overrideComponents}
      autoFocus={true}
      onChange={_onChange as any}
    />
  )
}
