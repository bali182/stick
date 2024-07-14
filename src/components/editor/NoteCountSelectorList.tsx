import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { chordsSlice } from '../../state/chords'
import { ListSelector } from './ListSelector'

export type NoteCountSelectorListProps = {
  setOpen: (open: boolean) => void
  chordId: string
}

const noteCounts = [[1, 2, 4]]

const getChildren = (counts: number[]) => counts
const getCategoryKey = (_: number[]) => 'counts'
const getCategoryLabel = (_: number[]) => 'Select note count'
const getItemKey = (item: number) => item.toString()
const getItemLabel = (item: number) => `${item} Notes`
const matches = (_item: number, _search: string) => true

export const NoteCountSelectorList: FC<NoteCountSelectorListProps> = ({
  setOpen,
  chordId,
}) => {
  const dispatch = useDispatch<AppDispatch>()

  const onItemClick = (noteCount: number) => {
    dispatch(
      chordsSlice.actions.updateChord({
        chord: { id: chordId, noteCount },
      }),
    )
    setOpen(false)
  }

  return (
    <ListSelector<number[], number>
      categories={noteCounts}
      canSearch={false}
      canCreate={false}
      onItemClick={onItemClick}
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
