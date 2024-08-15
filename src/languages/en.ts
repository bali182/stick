export const en = {
  Language: 'Language',
  Home: {
    RecentProgressions: 'Recent Progressions',
    NewProgression: 'New Progression',
    ProgressionName: 'Progression name...',
    Bars: 'Bars',
    Create: 'Create',
  },
  Progression: {
    Bar: 'Bar',
    Chord: 'Chord',
    Root: 'Root',
    Notes: 'Notes',
    Transition: 'Transition',
    Default: 'Default',
    Search: 'Search...',
    SelectNoteCount: 'Select note count',
    SelectRootNote: 'Select root note',
  },
  EditorNavigation: {
    FillTransitions: 'Fill transitions',
    ClearTransitions: 'Clear transitions',
    Settings: 'Settings',
  },
  Navigation: {
    Editor: 'Editor',
    Score: 'Score',
  },
  Settings: {
    Settings: 'Settings',
    General: 'General',
    Progression: 'Progression',
    Tuning: 'Tuning',
    DangerZone: 'Danger Zone',
    ShowTooltipsName: 'Show Tooltips',
    ShowTooltipsDescription:
      'Turn on or off tooltips appearing on controls in the application.',
    TempoName: 'Tempo',
    TempoDescription: 'Tempo of the project in BPM (beats per minute)',
    NotesInABarName: 'Notes in a bar',
    NotesInABarDescription: 'Preferred amount of notes in a bar.',
    TuningName: 'Tuning',
    TuningDescription:
      'You can change the tuning here to the exact tuning you are using.',
    TuningAddString: 'Add String',
    DeleteProgressionName: 'Delete chord progression',
    DeleteProgressionDescription:
      'Pressing this button will permanently delete this chord progression.',
    DeleteProgressionButton: 'Permanently delete progression',
  },
  Score: {
    AlphaTabRenderedBy: 'Tabs & score rendered by:',
  },
  Errors: {
    ScoreCannotBeGenerated: 'Score cannot be generated!',
    WhatsMissing: "What's missing?",
    AtLeast2Bars: 'You should have at least 2 bars.',
    AtLeast1Chord: 'Each bar should have at least 1 chord in it.',
    NeedsTransitions:
      'Each chord should have a transition defined to the next chord.',
    MissingChord:
      'This chord is missing! This is most likely the result of a bug.',
    MissingBar: 'This bar is missing! This is most likely the result of a bug.',
    Delete: 'Delete',
    InvalidChord: 'Invalid chord',
    NoTransitionsMessage:
      'No transitions found! Consider changing the root notes, your preferences, or search criteria',
  },
  '404': {
    MissingProgression: "The progression you are looking for doesn't exist!",
    GoBack: 'Go back',
    '404': "404 - this page doesn't do anything.",
  },
  Templates: {
    EmptyName: 'New Progression',
    EmptyDescription: 'Create your own progression from scratch.',
    AMinorBluesName: 'A Minor Blues',
    AMinorBluesDescription:
      'Simple minor blues progression, focusing on i, iv and v chords.',
    AutumnLeavesName: 'Autumn Leaves',
    AutumnLeavesDescription:
      'Autumn Leaves in G minor. For practicing both the major and minor ii V I.',
    AllMyLovingName: 'All My Loving',
    AllMyLovingDescription:
      'The verse of the Beatles song "All My Loving" which features a walking bassline.',
  },
  Tooltips: {
    Progression: {
      FillTransitions: `Click to automatically fill transitions. For this to work, you need at least 2 bars and each should have at least 1 chord in it. <br/><br/><strong>This will leave existing transitions intact.</strong>`,
      ClearTransitions: `Click to clear all transitions. Great for experimenting a new set of transitions between chords.`,
      AddBar:
        'Click to add a new bar. You can add up to two chords to each bar.',
      AddChord: 'Click to add a chord to this bar.',
      SelectRoot:
        'Select the root note of this chord. Each note of this chords transition will be selected relative to this root note.',
      SelectNoteCount:
        "Select how many notes you want to generate for the duration of this chord. By default each chord will be using the progression's preferred note count",

      Transition: `Pick a transition to the next chord from the appropriate transitons.<br/>
      <br/><strong>R</strong> = Current chords root note
      <br/><strong>3</strong> = Third of the current chord
      <br/><strong>5</strong> = Fifth of the current chord
      <br/><strong>NR</strong> = Next chords root note
      <br/><br/><strong>↑</strong> means up and <strong>↓</strong> means down from the current chords root. Numeric modifiers like +1 or -2 mean the given chord tone shifted with that amount of semitones.`,
      DeleteBar: 'Click to delete this bar.',
      DeleteChord: 'Click to delete this chord.',
      DeleteTransition: 'Click to delete this transition.',
      SplitBar: 'Click to add a second chord to this bar.',
      CloneBar: 'Click to clone this bar.',
      DragBar: 'Grab to move this bar.',
    },
    Score: {
      Stop: 'Click to stop playback and reset playhead',
      PlayPause: 'Click to play or pause',
      Loop: 'Click to turn on or off looping selection',
      MetronomeVolume: 'Metronome volume',
      BassVolume: 'Bass volume',
      ChordsVolume: 'Chords volume',
    },
  },
}
