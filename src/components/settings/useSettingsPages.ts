import { useTranslation } from 'react-i18next'
import { SettingsPage } from './types'
import { useMemo } from 'react'
import { nanoid } from 'nanoid'
import { PiGear, PiMusicNoteSimple, PiWarning } from 'react-icons/pi'
import { BasePage } from './BasePage'
import { TuningPage } from './TuningPage'
import { DangerPage } from './DangerPage'

export function useSettingsPages(): SettingsPage[] {
  const { t } = useTranslation()
  const pages = useMemo((): SettingsPage[] => {
    return [
      {
        id: nanoid(),
        name: t('Settings.Preferences'),
        Icon: PiGear,
        Component: BasePage,
      },
      {
        id: nanoid(),
        name: t('Settings.Tuning'),
        Icon: PiMusicNoteSimple,
        Component: TuningPage,
      },
      {
        id: nanoid(),
        name: t('Settings.DangerZone'),
        Icon: PiWarning,
        Component: DangerPage,
      },
    ]
  }, [t])
  return pages
}
