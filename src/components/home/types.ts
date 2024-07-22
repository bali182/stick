import { IconType } from 'react-icons'
import { AppState, ProgressionTemplate } from '../../state/types'

export type TemplateDescriptor = {
  name: string
  Icon: IconType
  description: string
  factory: (name: string, state: AppState) => ProgressionTemplate
}
