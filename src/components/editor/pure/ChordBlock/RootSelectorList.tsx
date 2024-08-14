import { FC, useCallback, useMemo } from 'react'
import { ListSelector } from '../../ListSelector'
import { PitchedNote } from '../../../../model/types'
import { useTranslation } from 'react-i18next'

export type RootSelectorListProps = {
  root: PitchedNote
  values: PitchedNote[]
  onChange: (root: PitchedNote) => void
}

const getChildren = (counts: PitchedNote[]) => counts
const getCategoryKey = (_: PitchedNote[]) => 'notes'
const getItemKey = (item: PitchedNote) => item.toString()
const getItemLabel = (item: PitchedNote) => item
const matches = (_item: PitchedNote, _search: string) => true

export const RootSelectorList: FC<RootSelectorListProps> = ({
  onChange,
  values,
}) => {
  const { t } = useTranslation()
  const wrappedValues = useMemo(() => [values], [values])
  const getCategoryLabel = useCallback(
    (_: PitchedNote[]) => t('Progression.SelectRootNote'),
    [t],
  )

  return (
    <ListSelector<PitchedNote[], PitchedNote>
      categories={wrappedValues}
      canSearch={false}
      canCreate={false}
      onItemClick={onChange}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      matches={matches}
      noHitsLabel={''}
    />
  )
}
