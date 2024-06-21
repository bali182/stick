import { FC } from 'react'
import { ChordSymbol, ChordType, NoteName, SelectItem } from '../types'
import Select, {
  CSSObjectWithLabel,
  StylesConfig,
  SelectComponentsConfig,
} from 'react-select'
import { css } from '@emotion/css'

export type ChordEditorProps = {
  chord: ChordSymbol
  onChange: (chord: ChordSymbol) => void
}

const NOTE_MAP: Record<NoteName, boolean> = {
  C: true,
  'C#': true,
  Db: true,
  D: true,
  'D#': true,
  Eb: true,
  E: true,
  F: true,
  'F#': true,
  Gb: true,
  G: true,
  'G#': true,
  Ab: true,
  A: true,
  'A#': true,
  Bb: true,
  B: true,
}

const NOTES = Object.keys(NOTE_MAP).map(
  (note): SelectItem<NoteName> => ({ label: note, value: note as NoteName }),
)

const CHORD_TYPES_TO_NAMES: Record<ChordType, string> = {
  MAJOR: 'Major',
  'DOMINANT-SEVENTH': 'Dominant 7th',
  'MAJOR-SEVENTH': 'Major 7th',
  MINOR: 'Minor',
  'MINOR-SEVENTH': 'Minor 7th',
  DIMINISHED: 'Diminished',
  'HALF-DIMINISHED': 'Half-Diminished',
  'DIMINISHED-SEVENTH': 'Diminished 7th',
  AUGMENTED: 'Augmented',
  'AUGMENTED-SEVENTH': 'Augmented 7th',
}

const CHORD_TYPES = Object.entries(CHORD_TYPES_TO_NAMES).map(
  ([value, label]): SelectItem<ChordType> => ({
    label,
    value: value as ChordType,
  }),
)

const chordEditorStyle = css`
  display: flex;
  flex-direction: row;
`

const fontChangeProps = (provided: CSSObjectWithLabel): CSSObjectWithLabel => ({
  ...provided,
  fontFamily: 'Poppins',
  fontSize: '1.2em',
})

const baseProps: StylesConfig = {
  input: fontChangeProps,
  singleValue: fontChangeProps,
  menuList: fontChangeProps,
  placeholder: fontChangeProps,
  control: (provided): CSSObjectWithLabel => ({
    ...provided,
    borderWidth: '0px',
    boxShadow: 'none',
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
  const nameItem: SelectItem<NoteName> = {
    label: chord.name,
    value: chord.name,
  }
  const typeItem: SelectItem<ChordType> = {
    label: CHORD_TYPES_TO_NAMES[chord.type],
    value: chord.type,
  }
  const rootItem: SelectItem<NoteName> | null = chord.root
    ? {
        label: chord.root,
        value: chord.root,
      }
    : null

  const onNameChange = (data: SelectItem<NoteName>): void => {
    onChange({ ...chord, name: data.value })
  }
  const onTypeChange = (data: SelectItem<ChordType>): void => {
    onChange({ ...chord, type: data.value })
  }
  const onRootChange = (data: SelectItem<NoteName> | null): void => {
    onChange({ ...chord, root: data ? data.value : undefined })
  }

  return (
    <div className={chordEditorStyle}>
      <Select
        value={nameItem}
        options={NOTES}
        placeholder="Note"
        styles={leftSelectStyles}
        components={overrideComponents}
        autoFocus={true}
        onChange={onNameChange as any}
      />
      <Select
        value={typeItem}
        options={CHORD_TYPES}
        placeholder="Type"
        components={overrideComponents}
        styles={middleSelectStyles}
        onChange={onTypeChange as any}
      />
      <Select
        value={rootItem}
        components={overrideComponents}
        options={NOTES}
        placeholder="Root"
        styles={rightSelectStyles}
        onChange={onRootChange as any}
        isClearable={true}
      />
    </div>
  )
}
