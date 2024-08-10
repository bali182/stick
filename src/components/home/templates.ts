import { PiFileLight, PiMusicNotesLight } from 'react-icons/pi'
import { TemplateDescriptor } from './types'
import { withUniqueIds } from '../../state/templates/withUniqueIds'
import { AppState, ProgressionTemplate } from '../../state/types'
import { aMinorBlues } from '../../state/templates/aMinorBlues'
import { emptyTemplate } from '../../state/templates/emptyTemplate'
import { autumnLeavesTemplate } from '../../state/templates/autumnLeavesTemplate'
import { allMyLoving } from '../../state/templates/allMyLoving'

export const templates: TemplateDescriptor[] = [
  {
    name: 'New Progression',
    Icon: PiFileLight,
    description: 'Create your own progression from scratch.',
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, emptyTemplate, name),
  },
  {
    name: 'A Minor Blues',
    Icon: PiMusicNotesLight,
    description:
      'Simple minor blues progression, focusing on i, iv and v chords.',
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, aMinorBlues, name),
  },
  {
    name: 'Autumn Leaves',
    Icon: PiMusicNotesLight,
    description:
      'Autumn Leaves in G minor. For practicing both the major and minor ii V I.',
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, autumnLeavesTemplate, name),
  },
  {
    name: 'All My Loving',
    Icon: PiMusicNotesLight,
    description:
      'The verse of the Beatles song "All My Loving" which features a walking bassline.',
    factory: (name: string, state: AppState): ProgressionTemplate =>
      withUniqueIds(state, allMyLoving, name),
  },
]
