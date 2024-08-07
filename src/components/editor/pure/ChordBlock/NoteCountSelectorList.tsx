import { FC, useCallback } from 'react'
import { ListSelector } from '../../ListSelector'
import { isNil } from '../../../../model/isNil'

export type NoteCountSelectorListProps = {
  onChange: (noteCount: number | undefined) => void
  noteCount?: number
  progressionNoteCount?: number
}

const noteCounts = [[1, 2, 4, undefined]]

const getChildren = (counts: (number | undefined)[]) => counts
const getCategoryKey = () => 'counts'
const getCategoryLabel = () => 'Select note count'
const getItemKey = (item: number | undefined) =>
  isNil(item) ? 'default' : item.toString()
const matches = () => true

export const NoteCountSelectorList: FC<NoteCountSelectorListProps> = ({
  onChange,
  progressionNoteCount,
}) => {
  const getItemLabel = useCallback(
    (item: number | undefined) =>
      isNil(item) ? `Default (${progressionNoteCount} Notes)` : `${item} Notes`,
    [progressionNoteCount],
  )

  return (
    <ListSelector<(number | undefined)[], number | undefined>
      categories={noteCounts}
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
