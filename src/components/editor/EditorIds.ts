export const EditorIds = {
  addBarButton: 'add-bar-button',
  addChordButton: (barId: string) => `add-chord-${barId}`,
  chordAndTypeInput: (chordId: string) => `chord-and-type-input-${chordId}`,
} as const
