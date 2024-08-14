import { PiFileLight, PiMusicNotesLight } from 'react-icons/pi'
import { TemplateDescriptor } from './types'
import { withUniqueIds } from '../../state/templates/withUniqueIds'
import { AppState, ProgressionTemplate } from '../../state/types'
import { aMinorBlues } from '../../state/templates/aMinorBlues'
import { emptyTemplate } from '../../state/templates/emptyTemplate'
import { autumnLeavesTemplate } from '../../state/templates/autumnLeavesTemplate'
import { allMyLoving } from '../../state/templates/allMyLoving'
import { i18n } from '../../languages/i18n'

export const templates: TemplateDescriptor[] = [
  {
    name: i18n.t('Templates.EmptyName'),
    Icon: PiFileLight,
    description: i18n.t('Templates.EmptyDescription'),
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, emptyTemplate, name),
  },
  {
    name: i18n.t('Templates.AMinorBluesName'),
    Icon: PiMusicNotesLight,
    description: i18n.t('Templates.AMinorBluesDescription'),
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, aMinorBlues, name),
  },
  {
    name: i18n.t('Templates.AutumnLeavesName'),
    Icon: PiMusicNotesLight,
    description: i18n.t('Templates.AutumnLeavesDescription'),
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, autumnLeavesTemplate, name),
  },
  {
    name: i18n.t('Templates.AllMyLovingName'),
    Icon: PiMusicNotesLight,
    description: i18n.t('Templates.AllMyLovingDescription'),
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, allMyLoving, name),
  },
]
