import { FC, useMemo } from 'react'
import { ChordSymbol } from '../../model/types'
import {
  defaultComponents,
  defaultStyles,
  DropdownProxy,
} from '../DropdownProxy'
import { getChordSymbolName } from '../../model/getChordSymbolName'
import { ALL_CHORD_NAMES, CHORD_NAMES_TO_PARTS } from '../../chords'
import { useActiveProgression, useNoteRange } from '../../modelHooks'
import { getPossiblePitches } from '../../model/utils'

export type ChordNameEditorProps = {
  chord: ChordSymbol
  onChange: (chord: ChordSymbol) => void
}

const getLabel = (input: string) => input

export const ChordNameEditor: FC<ChordNameEditorProps> = ({
  chord,
  onChange,
}) => {
  const value = getChordSymbolName(chord)
  const progression = useActiveProgression()
  const range = useNoteRange(progression?.tuning)

  const onChordChange = (chordName: string) => {
    console.log(chordName)
    if (!CHORD_NAMES_TO_PARTS.has(chordName)) {
      return
    }
    const [name, type] = CHORD_NAMES_TO_PARTS.get(chordName)!
    const roots = getPossiblePitches(chord.name, range)
    const root = roots.includes(chord.root)
      ? chord.root
      : roots[roots.length - 1]!

    onChange({ ...chord, root, name, type })
  }

  return (
    <DropdownProxy
      id={`${chord.id}-picker`}
      placeholder=""
      value={value}
      values={ALL_CHORD_NAMES}
      autoFocus={true}
      styles={defaultStyles}
      components={defaultComponents}
      onChange={onChordChange}
      getLabel={getLabel}
    />
  )
}
