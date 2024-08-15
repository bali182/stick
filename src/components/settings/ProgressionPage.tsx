import { FC } from 'react'
import { InputSection } from './InputSection'
import { TextInput } from './TextInput'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { isNil } from '../../model/isNil'
import { progressionsSlice } from '../../state/progressions'
import { Dropdown } from './Dropdown'
import { ChordProgression } from '../../model/types'
import { PageProps } from './types'
import { useActiveProgression } from '../../modelHooks'
import { setNoteCount } from '../../state/actionCreators'
import { useTranslation } from 'react-i18next'

const notesData = {
  values: ['2', '4'],
}

export const BasePage: FC<PageProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useActiveProgression()
  const { t } = useTranslation()

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

  const onBpmChange = (bpm: string) => {
    updateProgression({ bpm: parseInt(bpm) })
  }

  const onNoteCountChange = (amount: string) => {
    dispatch(
      setNoteCount({
        noteCount: parseInt(amount),
        progressionId: progression!.id,
      }),
    )
  }

  return (
    <>
      <InputSection
        name={t('Settings.TempoName')}
        description={t('Settings.TempoDescription')}
        Editor={TextInput}
        onChange={onBpmChange}
        value={(progression?.bpm ?? 120).toString()}
        data={{ type: 'number', min: 60, max: 500, step: 1 }}
      />
      <InputSection
        name={t('Settings.NotesInABarName')}
        description={t('Settings.NotesInABarDescription')}
        Editor={Dropdown}
        data={notesData}
        onChange={onNoteCountChange}
        value={progression?.noteCount?.toString() ?? ''}
      />
    </>
  )
}
