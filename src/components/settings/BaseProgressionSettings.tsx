import { FC } from 'react'
import { InputSection } from './InputSection'
import { TextInput } from './TextInput'

export const BaseProgressionSettings: FC = () => {
  return (
    <>
      <InputSection
        name="Progression name"
        Editor={TextInput}
        onChange={() => {}}
        value={''}
      />
    </>
  )
}
