import { FC, useMemo } from 'react'
import { ListSelector } from '../../ListSelector'
import { PitchedNote } from '../../../../model/types'

export type RootSelectorListProps = {
  root: PitchedNote
  values: PitchedNote[]
  onChange: (root: PitchedNote) => void
}

const getChildren = (counts: PitchedNote[]) => counts
const getCategoryKey = (_: PitchedNote[]) => 'notes'
const getCategoryLabel = (_: PitchedNote[]) => 'Select root note'
const getItemKey = (item: PitchedNote) => item.toString()
const getItemLabel = (item: PitchedNote) => item
const matches = (_item: PitchedNote, _search: string) => true

export const RootSelectorList: FC<RootSelectorListProps> = ({
  onChange,
  values,
}) => {
  const wrappedValues = useMemo(() => [values], [values])

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
