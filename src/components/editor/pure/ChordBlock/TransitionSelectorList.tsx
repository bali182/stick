import { FC } from 'react'
import { Transition, TransitionCategory } from '../../../../model/types'
import { ListSelector } from '../../ListSelector'
import { useTranslation } from 'react-i18next'

export type TransitionSelectorListProps = {
  setOpen: (open: boolean) => void
  transition?: Transition
  categories: TransitionCategory[]
  onChange: (transition: Transition | undefined) => void
}

const getChildren = (category: TransitionCategory) => category.transitions
const getCategoryKey = (category: TransitionCategory) => category.id
const getCategoryLabel = (category: TransitionCategory) => category.name
const getItemKey = (item: Transition) => item.id
const getItemLabel = (item: Transition) => item.name
const matches = (item: Transition, search: string) =>
  item.name.toLowerCase().includes(search.toLowerCase())

export const TransitionSelectorList: FC<TransitionSelectorListProps> = ({
  setOpen,
  categories,
  onChange,
}) => {
  const { t } = useTranslation()
  const onItemClick = (transition: Transition) => {
    onChange(transition)
    setOpen(false)
  }
  return (
    <ListSelector<TransitionCategory, Transition>
      categories={categories}
      canSearch={true}
      canCreate={false}
      onItemClick={onItemClick}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      matches={matches}
      noHitsLabel={t('Errors.NoTransitionsMessage')}
    />
  )
}
