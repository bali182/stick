import { useTranslation } from 'react-i18next'
import { SettingsPage } from './types'
import { useMemo } from 'react'
import { nanoid } from 'nanoid'
import { PiGear, PiMusicNotesSimple, PiWarning } from 'react-icons/pi'
import { BasePage as ProgressionPage } from './ProgressionPage'
import { TuningPage } from './TuningPage'
import { DangerPage } from './DangerPage'
import { GiGuitarBassHead } from 'react-icons/gi'

export function useSettingsPages(): SettingsPage[] {
  const { t, i18n } = useTranslation()
  const pages = useMemo((): SettingsPage[] => {
    return [
      {
        id: nanoid(),
        name: t('Settings.General'),
        Icon: PiGear,
        Component: () => <></>,
      },
      {
        id: nanoid(),
        name: t('Settings.Progression'),
        Icon: PiMusicNotesSimple,
        Component: ProgressionPage,
      },
      {
        id: nanoid(),
        name: t('Settings.Tuning'),
        Icon: GiGuitarBassHead,
        Component: TuningPage,
      },
      {
        id: nanoid(),
        name: t('Settings.DangerZone'),
        Icon: PiWarning,
        Component: DangerPage,
      },
    ]
  }, [t, i18n.language])
  return pages
}
