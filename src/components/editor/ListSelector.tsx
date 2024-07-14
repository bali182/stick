import { css } from '@emotion/css'
import { ChangeEvent, Fragment, useMemo, useState } from 'react'
import { IconType } from 'react-icons'
import { RiSearchLine } from 'react-icons/ri'
import { isNil } from '../../model/isNil'
import { PiPlusBold } from 'react-icons/pi'

export type ListSelectorProps<C, I> = {
  categories: C[]
  noHitsLabel: string
  canCreate: boolean
  canSearch: boolean
  createLabel?: string
  onCreate?: () => void
  onItemClick: (item: I) => void
  getChildren: (category: C) => I[]
  getCategoryKey: (category: C) => string
  getCategoryLabel: (category: C) => string
  getCategoryIcon?: (category: C) => IconType
  getItemKey: (item: I) => string
  getItemLabel: (item: I) => string
  getItemIcon?: (item: I) => IconType
  matches: (item: I, search: string) => boolean
}

const containerStyle = css`
  width: 100%;
  height: 300px;
  padding-bottom: 30px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`

const noHitsContainerStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 40px 14px;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff99;
`

const noHitsIconStyle = css`
  font-size: 3em;
`

const noHitsTextStyle = css`
  font-size: 0.9em;
  text-align: center;
`

const searchTextBoxStyle = css`
  display: block;
  padding-left: 14px;
  padding-right: 14px;
  margin: 14px;
  width: calc(100% - (14px * 2));
  background-color: #ffffff15;
  border: none;
  border-radius: 18px;
  height: 36px;
  font-size: 1em;
  color: #ffffff;
  outline: none;
  &:focus {
    outline: none;
    border: none;
    background-color: #ffffff30;
  }
`

const categoryTitleStyle = css`
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: bold;
  padding: 4px 10px;
  color: #ffffff99;
  background-color: #ffffff10;
`

const itemStyle = css`
  padding: 6px 10px;
  color: #ffffff;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #ffffff25;
  }
`

const createButtonStyle = css`
  height: 40px;
  border-radius: 20px;
  margin: 20px 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: flex-end;
  border: none;
  color: #ffffffdd;
  padding: 0px 20px;
  gap: 6px;
  cursor: pointer;
  font-size: 1em;
  background-color: #ffffff20;
  &:hover {
    color: #fff;
    background-color: #ffffff30;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

export function ListSelector<C, I>({
  categories,
  noHitsLabel,
  canCreate,
  canSearch,
  createLabel,
  getChildren,
  getCategoryKey,
  getCategoryLabel,
  getCategoryIcon,
  getItemKey,
  getItemLabel,
  getItemIcon,
  onItemClick,
  onCreate,
  matches,
}: ListSelectorProps<C, I>): JSX.Element {
  const [search, setSearch] = useState('')

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)

  const onClick = (item: I) => () => onItemClick(item)

  const data: [C, I[]][] = useMemo(() => {
    const result: [C, I[]][] = []
    for (let c of categories) {
      const items = getChildren(c).filter((child) => matches(child, search))
      if (items.length > 0) {
        result.push([c, items])
      }
    }
    return result
  }, [categories, getChildren, search, matches])

  return (
    <>
      {canSearch && (
        <input
          type="text"
          className={searchTextBoxStyle}
          placeholder="Search..."
          value={search}
          onChange={onSearchChange}
        />
      )}
      <div className={containerStyle}>
        {data.length === 0 && (
          <div className={noHitsContainerStyle}>
            <RiSearchLine className={noHitsIconStyle} />
            <span className={noHitsTextStyle}>{noHitsLabel}</span>
          </div>
        )}
        {data.map(([category, items]) => {
          const CatIcon = isNil(getCategoryIcon)
            ? null
            : getCategoryIcon(category)
          return (
            <Fragment key={getCategoryKey(category)}>
              <div className={categoryTitleStyle}>
                {CatIcon && <CatIcon />}
                {getCategoryLabel(category)}
              </div>
              {items.map((item) => {
                const ItemIcon = isNil(getItemIcon) ? null : getItemIcon(item)
                return (
                  <div
                    key={getItemKey(item)}
                    className={itemStyle}
                    onClick={onClick(item)}
                  >
                    {ItemIcon && <ItemIcon />}
                    {getItemLabel(item)}
                  </div>
                )
              })}
            </Fragment>
          )
        })}
        {canCreate && (
          <button className={createButtonStyle} onClick={onCreate}>
            <PiPlusBold /> {createLabel}
          </button>
        )}
      </div>
    </>
  )
}
