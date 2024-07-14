import { css, cx } from '@emotion/css'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { ChordProgression } from '../../model/types'
import { progressionsSlice } from '../../state/progressions'
import { configSlice } from '../../state/config'
import { PiPlusBold } from 'react-icons/pi'
import { ListSelector } from './ListSelector'

export type TransitionSelectorListProps = {
  setOpen: (open: boolean) => void
  add: () => void
}

const containerStyle = css`
  width: 100%;
  height: 300px;
  padding-bottom: 30px;
  overflow: auto;
`

const itemStyle = css`
  padding: 6px 10px;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #ffffff35;
  }
`

const activeItemStyle = css`
  background-color: #ffffff30;
  &:hover {
    background-color: #ffffff30;
  }
`

const getChildren = (category: ChordProgression[]) => category
const getCategoryKey = (_category: ChordProgression[]) => 'progressions'
const getCategoryLabel = (_category: ChordProgression[]) => 'Your progressions'
const getItemKey = (item: ChordProgression) => item.id
const getItemLabel = (item: ChordProgression) => item.name
const matches = (item: ChordProgression, search: string) =>
  item.name.toLowerCase().includes(search.toLowerCase())
const noHitsLabel = 'No progressions found! Please create one!'

export const ProgressionSelector: FC<TransitionSelectorListProps> = ({
  setOpen,
  add,
}) => {
  const progressions = useSelector(progressionsSlice.selectors.getProgressions)

  const dispatch = useDispatch<AppDispatch>()

  const onItemClick = ({ id }: ChordProgression) => {
    dispatch(configSlice.actions.updateConfig({ progressionId: id }))
    setOpen(false)
  }

  const onCreate = () => {
    setOpen(false)
    add()
  }

  return (
    <ListSelector<ChordProgression[], ChordProgression>
      categories={[progressions]}
      canCreate={true}
      canSearch={true}
      createLabel="Create progression"
      onCreate={onCreate}
      onItemClick={onItemClick}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      matches={matches}
      noHitsLabel={noHitsLabel}
    />
  )
}
