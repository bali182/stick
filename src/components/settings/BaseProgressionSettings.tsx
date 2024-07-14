import { FC, InputHTMLAttributes } from 'react'
import { InputSection } from './InputSection'
import { TextInput } from './TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { getActiveProgression } from '../../state/selectors/getActiveProgression'
import { isNil } from '../../model/isNil'
import { progressionsSlice } from '../../state/progressions'
import { Dropdown, MultiDropdown } from './Dropdown'
import { Tag } from '../../model/types'

const TAGS_MAP: Record<Tag, boolean> = {
  CHROMATIC_APPROACH: true,
  CHORD_TONE_ONLY: true,
}

const tagsData = {
  values: Object.keys(TAGS_MAP) as Tag[],
}

const notesData = {
  values: ['1', '2', '4'],
}

export const BaseProgressionSettings: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useSelector(getActiveProgression)

  const onNameChange = (name: string) => {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.updateProgression({
        progression: { ...progression, name },
      }),
    )
  }

  const onNoteCountChange = (amount: string) => {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.updateProgression({
        progression: { ...progression, noteCount: parseInt(amount) },
      }),
    )
  }

  const onTagsChange = (tags: string[]) => {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.updateProgression({
        progression: { ...progression, tags: tags as Tag[] },
      }),
    )
  }

  return (
    <>
      <InputSection
        name="Progression name"
        description="Name of your progression, helps you identify and find it later."
        Editor={TextInput}
        onChange={onNameChange}
        value={progression?.name ?? ''}
      />
      <InputSection
        name="Tags"
        description="Your global prefferences regarding how chords transition in this progression. Can be changed per chord."
        Editor={MultiDropdown}
        data={tagsData}
        onChange={onTagsChange}
        value={progression?.tags ?? []}
      />
      <InputSection
        name="Notes in a bar"
        description="Preferred amount of notes in a bar."
        Editor={Dropdown}
        data={notesData}
        onChange={onNoteCountChange}
        value={progression?.noteCount?.toString() ?? ''}
      />
    </>
  )
}
