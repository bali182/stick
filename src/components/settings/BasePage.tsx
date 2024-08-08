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

// const TAGS_MAP: Record<Tag, boolean> = {
//   CHROMATIC_APPROACH: true,
//   CHORD_TONE_ONLY: true,
//   ASCENDING: true,
//   DESCENDING: true,
// }

// const tagsData = {
//   values: Object.keys(TAGS_MAP) as Tag[],
// }

const notesData = {
  values: ['2', '4'],
}

export const BasePage: FC<PageProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useActiveProgression()

  function updateProgression(updates: Partial<ChordProgression>): void {
    if (isNil(progression)) {
      return
    }
    dispatch(
      progressionsSlice.actions.updateProgression({
        progressionId: progression.id,
        updates,
      }),
    )
  }

  const onNameChange = (name: string) => {
    updateProgression({ name })
  }

  const onBpmChange = (bpm: string) => {
    updateProgression({ bpm: parseInt(bpm) })
  }

  const onNoteCountChange = (amount: string) => {
    updateProgression({ noteCount: parseInt(amount) })
  }

  // const onTagsChange = (tags: string[]) => {
  //   updateProgression({ tags: tags as Tag[] })
  // }

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
        name="Tempo"
        description="Tempo of the project in BPM (beats per minute)"
        Editor={TextInput}
        onChange={onBpmChange}
        value={(progression?.bpm ?? 120).toString()}
        data={{ type: 'number', min: 60, max: 500, step: 1 }}
      />
      {/* <InputSection
        name="Tags"
        description="Your global prefferences regarding how chords transition in this progression. Can be changed per chord."
        Editor={MultiDropdown}
        data={tagsData}
        onChange={onTagsChange}
        value={progression?.tags ?? []}
      /> */}
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
