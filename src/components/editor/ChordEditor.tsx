import { FC, useEffect, useMemo } from 'react'
import {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'
import { ChordSymbol, ChordType, Note, PitchedNote } from '../../model/types'
import { getPossiblePitches } from '../../model/utils'
import { useSelector } from 'react-redux'
import { getNoteRange } from '../../model/getNoteRange'
import { CHORD_TYPES_TO_NAMES, INDEX_BY_NOTE } from '../../model/constants'
import { DropdownProxy } from '../DropdownProxy'
import { useActiveProgression } from '../../useActiveProgression'

export type ChordEditorProps = {
  chord: ChordSymbol
  onChange: (chord: ChordSymbol) => void
}

const NOTES = Object.keys(INDEX_BY_NOTE) as Note[]

const CHORD_TYPES = Object.keys(CHORD_TYPES_TO_NAMES) as ChordType[]

const getChordTypeName = (type: ChordType) => CHORD_TYPES_TO_NAMES[type]

const chordEditorStyle = css`
  display: flex;
  flex-direction: row;
`

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  fontSize: '1.2em',
  color: '#ffffff',
})

const baseProps: StylesConfig = {
  input: fontChangeProps,
  singleValue: fontChangeProps,
  menuList: (provided): CSSObjectWithLabel => ({
    ...fontChangeProps(provided),
    backgroundColor: '#181818',
  }),
  placeholder: fontChangeProps,
  control: (provided): CSSObjectWithLabel => ({
    ...provided,
    borderWidth: '0px',
    boxShadow: 'none',
    backgroundColor: 'transparent',
  }),
  option: (provided, { isSelected, isFocused }) => ({
    ...provided,
    backgroundColor: isSelected
      ? '#ffffff40'
      : isFocused
      ? '#ffffff30'
      : 'transparent',
    ':active': {
      backgroundColor: '#ffffff30',
    },
  }),
}

const leftSelectStyles: StylesConfig = {
  ...baseProps,

  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const middleSelectStyles: StylesConfig = {
  ...baseProps,
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '180px',
  }),
}

const rightSelectStyles: StylesConfig = {
  ...(baseProps as any),
  control: (provided, props): CSSObjectWithLabel => ({
    ...baseProps.control!(provided, props)!,
    ':before': {
      color: '#fff',
      content: '"/"',
    },
  }),
  menu: (provided): CSSObjectWithLabel => ({
    ...provided,
    minWidth: '60px',
  }),
}

const overrideComponents: SelectComponentsConfig<any, any, any> = {
  DropdownIndicator: () => null,
  IndicatorSeparator: () => null,
}

export const ChordEditor: FC<ChordEditorProps> = ({ chord, onChange }) => {
  const inputId = `${chord.id}-input`

  const progression = useActiveProgression()
  const range = useMemo(
    () => getNoteRange(progression?.tuning!),
    [progression?.tuning],
  )
  const possibleRoots = useMemo<PitchedNote[]>(
    () => getPossiblePitches(chord.name, range).sort(),
    [range, chord.name],
  )

  const onNameChange = (data: Note): void => {
    const possiblePitches = getPossiblePitches(data, range)
    onChange({
      ...chord,
      name: data,
      root: possiblePitches[possiblePitches.length - 1]!,
    })
  }
  const onTypeChange = (data: ChordType): void => {
    onChange({ ...chord, type: data })
  }
  const onRootChange = (data: PitchedNote): void => {
    onChange({ ...chord, root: data })
  }

  useEffect(() => {
    document.getElementById(inputId)?.focus()
  }, [])

  return (
    <div className={chordEditorStyle}>
      <DropdownProxy
        id={inputId}
        value={chord.name}
        values={NOTES}
        placeholder="Note"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onNameChange as any}
      />
      <DropdownProxy
        value={chord.type}
        values={CHORD_TYPES}
        placeholder="Type"
        components={overrideComponents}
        styles={middleSelectStyles}
        onChange={onTypeChange as any}
        getLabel={getChordTypeName}
      />
      <DropdownProxy
        value={chord.root}
        components={overrideComponents}
        values={possibleRoots}
        placeholder="Root"
        styles={rightSelectStyles}
        onChange={onRootChange as any}
      />
    </div>
  )
}
