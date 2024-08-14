import { PiFileLight, PiMusicNotesLight } from 'react-icons/pi'
import { TemplateDescriptor } from './types'
import { withUniqueIds } from '../../state/templates/withUniqueIds'
import { AppState, ProgressionTemplate } from '../../state/types'
import { aMinorBlues } from '../../state/templates/aMinorBlues'
import { emptyTemplate } from '../../state/templates/emptyTemplate'
import { autumnLeavesTemplate } from '../../state/templates/autumnLeavesTemplate'
import { allMyLoving } from '../../state/templates/allMyLoving'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

export function useTemplates(): TemplateDescriptor[] {
  const { t } = useTranslation()
  const templates = useMemo((): TemplateDescriptor[] => {
    return [
      {
        name: t('Templates.EmptyName'),
        Icon: PiFileLight,
        description: t('Templates.EmptyDescription'),
        factory: (name: string, state: AppState): ProgressionTemplate =>
          withUniqueIds(state, emptyTemplate, name),
      },
      {
        name: t('Templates.AMinorBluesName'),
        Icon: PiMusicNotesLight,
        description: t('Templates.AMinorBluesDescription'),
        factory: (name: string, state: AppState): ProgressionTemplate =>
          withUniqueIds(state, aMinorBlues, name),
      },
      {
        name: t('Templates.AutumnLeavesName'),
        Icon: PiMusicNotesLight,
        description: t('Templates.AutumnLeavesDescription'),
        factory: (name: string, state: AppState): ProgressionTemplate =>
          withUniqueIds(state, autumnLeavesTemplate, name),
      },
      {
        name: t('Templates.AllMyLovingName'),
        Icon: PiMusicNotesLight,
        description: t('Templates.AllMyLovingDescription'),
        factory: (name: string, state: AppState): ProgressionTemplate =>
          withUniqueIds(state, allMyLoving, name),
      },
    ]
  }, [])
  return templates
}
