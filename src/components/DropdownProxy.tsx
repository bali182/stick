import { useMemo } from 'react'
import Select, { SelectComponentsConfig, StylesConfig } from 'react-select'
import { SelectItem } from '../model/types'

export type DropdownProxyProps<T> = {
  id?: string
  value: T | undefined
  values: T[]
  placeholder?: string
  autoFocus?: boolean
  styles: StylesConfig
  components: SelectComponentsConfig<any, any, any>
  onChange: (value: T) => void
  getLabel?: (value: T) => string
}

export function DropdownProxy<T>({
  id,
  value,
  values,
  styles,
  components,
  autoFocus,
  placeholder,
  onChange,
  getLabel,
}: DropdownProxyProps<T>) {
  const _onChange = (e: SelectItem<T>) => {
    onChange(e.value)
  }

  const wrappedValues = useMemo(
    () =>
      values.map(
        (value): SelectItem<T> => ({
          label: getLabel ? getLabel(value) : (value as string),
          value,
        }),
      ),
    [values, getLabel],
  )

  const wrappedValue = useMemo(
    () => wrappedValues.find((v) => v.value === value),
    [wrappedValues, value],
  )

  return (
    <Select
      inputId={id}
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={wrappedValue}
      options={wrappedValues}
      styles={styles}
      components={components}
      onChange={_onChange as any}
    />
  )
}
