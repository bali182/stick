import {
  FC,
  FocusEvent,
  KeyboardEvent,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ALL_CHORD_NAMES, CHORD_NAMES_TO_PARTS } from '../../../../chords'
import { useCombobox } from 'downshift'
import createSearch from '@nozbe/microfuzz'
import { css, cx } from '@emotion/css'
import { RiSearchLine } from 'react-icons/ri'
import { ChordType, Note } from '../../../../model/types'
import { isNil } from '../../../../model/isNil'
import { EditorIds } from '../../EditorIds'

export type ChordNameAndTypeProps = {
  chordId: string
  chord: string
  onChange: (name: Note, type: ChordType) => void
  chords?: string[]
}

const containerStyle = css``

const inputContainerStyle = css`
  display: flex;
  align-items: center;
`

const inputStyle = css`
  display: inline;
  font-weight: bold;
  color: #ffffffde;
  padding: 0px 2px;
  font-size: 2em;
  text-align: center;
  text-shadow: 0px 0px 0px transparent;
  transition: text-shadow 0.2s ease, color 0.2s ease;
  user-select: none;
  max-width: 150px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  &:hover,
  &:focus {
    color: #ffffffff;
    background-color: #ffffff30;
    border: none;
    outline: none;
  }
`

const hiddenMenuStyle = css`
  display: none;
`

const openMenuStyle = css`
  position: absolute;
  overflow: auto;
  height: 110px;
  width: 100%;
  background-color: #181818;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
  margin-top: 2px;
  z-index: 2;
  border-radius: 10px;
`

const menuItemStyle = css`
  padding: 6px 10px;
  font-size: '1em';
  color: #ffffffdd;
  cursor: pointer;
`

const highlightStyle = css`
  background-color: #ffffff30;
  color: '#ffffff';
`

const emptyContentStyle = css`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex-direction: column;
  color: #ffffffdd;
`

const getText = (chord: string) => [chord]

export const ChordNameAndType: FC<ChordNameAndTypeProps> = ({
  chord,
  chordId,
  onChange,
  chords = ALL_CHORD_NAMES,
}) => {
  const fireOnChange = (value: string | undefined) => {
    if (isNil(value)) {
      return
    }
    const match = chords.find((c) => c.toLowerCase() === value.toLowerCase())
    if (isNil(match)) {
      setText(chord)
      return
    }
    const data = CHORD_NAMES_TO_PARTS.get(match.toLowerCase())
    if (isNil(data)) {
      setText(chord)
      return
    }
    const [note, type] = data
    onChange(note, type)
  }

  const [text, setText] = useState(chord)

  const chordsFilter = useMemo(
    () => createSearch(chords, { getText, strategy: 'smart' }),
    [chords],
  )

  const filteredChords = useMemo(
    () => chordsFilter(text).map((data) => data.item),
    [chordsFilter, text],
  )

  useEffect(() => setText(chord), [chord])

  const {
    isOpen,
    highlightedIndex,
    getInputProps,
    getMenuProps,
    getItemProps,
    closeMenu,
  } = useCombobox({
    inputValue: text,
    items: filteredChords,
    selectedItem: chord,
    onInputValueChange: ({ inputValue }) => {
      setText(inputValue)
    },
    onSelectedItemChange: ({ selectedItem }) => {
      setText(selectedItem)
      fireOnChange(selectedItem)
    },
  })

  const onBlur = () => {
    fireOnChange(text)
    closeMenu()
  }

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      fireOnChange(text)
    }
  }

  const onFocus = (e: FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  const menuStyle = cx(openMenuStyle, !isOpen ? hiddenMenuStyle : undefined)
  return (
    <div className={containerStyle}>
      <div className={inputContainerStyle}>
        <input
          {...getInputProps({
            onKeyDown: onEnter,
            id: EditorIds.chordAndTypeInput(chordId),
          })}
          className={inputStyle}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
      <ul {...getMenuProps()} className={menuStyle}>
        {filteredChords.length === 0 && (
          <div className={emptyContentStyle}>
            <RiSearchLine />
            <span>Invalid chord</span>
          </div>
        )}
        {filteredChords.map((item, index) => {
          const itemStyle = cx(
            menuItemStyle,
            index === highlightedIndex ? highlightStyle : undefined,
          )
          return (
            <li
              {...getItemProps({ item, index })}
              key={item}
              className={itemStyle}
            >
              <span>{item}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
