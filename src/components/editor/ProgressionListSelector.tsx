import { FC } from 'react'
import { useSelector } from 'react-redux'
import { ChordProgression } from '../../model/types'
import { progressionsSlice } from '../../state/progressions'
import { ListSelector } from './ListSelector'

export type ProgressionListSelectorProps = {
  setOpen: (open: boolean) => void
}

const getChildren = (category: ChordProgression[]) => category
const getCategoryKey = (_category: ChordProgression[]) => 'progressions'
const getCategoryLabel = (_category: ChordProgression[]) => 'Your progressions'
const getItemKey = (item: ChordProgression) => item.id
const getItemLabel = (item: ChordProgression) => item.name
const matches = (item: ChordProgression, search: string) =>
  item.name.toLowerCase().includes(search.toLowerCase())
const noHitsLabel = 'No progressions found! Please create one!'
const getHyperLink = (item: ChordProgression) => `#/${item.id}/editor`

export const ProgressionListSelector: FC<ProgressionListSelectorProps> = ({
  setOpen,
}) => {
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)

  const onItemClick = () => setOpen(false)

  return (
    <ListSelector<ChordProgression[], ChordProgression>
      categories={[progressions]}
      canSearch={true}
      canCreate={false}
      onItemClick={onItemClick}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      getHyperLink={getHyperLink}
      matches={matches}
      noHitsLabel={noHitsLabel}
    />
  )
}
