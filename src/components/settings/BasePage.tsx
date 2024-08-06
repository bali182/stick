import { FC } from 'react'
import { InputSection } from './InputSection'
import { TextInput } from './TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { isNil } from '../../model/isNil'
import { progressionsSlice } from '../../state/progressions'
import { Dropdown, MultiDropdown } from './Dropdown'
import { ChordProgression, Tag } from '../../model/types'
import { PageProps } from './types'
import { useActiveProgression } from '../../modelHooks'

const TAGS_MAP: Record<Tag, boolean> = {
  CHROMATIC_APPROACH: true,
  CHORD_TONE_ONLY: true,
  ASCENDING: true,
  DESCENDING: true,
}

const tagsData = {
  values: Object.keys(TAGS_MAP) as Tag[],
}

const notesData = {
  values: ['2', '4'],
}

export const BasePage: FC<PageProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useActiveProgression()

  function updateProgression(prog: ChordProgression): void {
    if (isNil(progression)) {
      return
    }
    dispatch(progressionsSlice.actions.updateProgression({ progression: prog }))
  }

  const onNameChange = (name: string) => {
    updateProgression({ ...progression!, name })
  }

  const onNoteCountChange = (amount: string) => {
    updateProgression({ ...progression!, noteCount: parseInt(amount) })
  }

  const onTagsChange = (tags: string[]) => {
    updateProgression({ ...progression!, tags: tags as Tag[] })
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
