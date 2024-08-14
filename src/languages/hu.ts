import { Messages } from './types'

export const hu: Messages = {
  Language: 'Nyelv',
  Home: {
    RecentProgressions: 'Akkordköreid',
    NewProgression: 'Új Akkordkör',
    ProgressionName: 'Akkordkör neve...',
    Create: 'Létrehozás',
    Bars: 'Ütem',
  },
  Progression: {
    Bar: 'Ütem',
    Chord: 'Akkord',
    Root: 'Alaphang',
    Notes: 'Hang',
    Transition: 'Átmenet',
    Default: 'Alapért.',
    Search: 'Keresés...',
    SelectNoteCount: 'Hangok száma',
    SelectRootNote: 'Alaphang',
  },
  EditorNavigation: {
    FillTransitions: 'Átmenetek kitöltése',
    ClearTransitions: 'Átmenetek törlése',
    Settings: 'Beállítások',
  },
  Navigation: {
    Editor: 'Szerkesztő',
    Score: 'Kotta és Tab',
  },
  Settings: {
    Settings: 'Beállítások',
    Preferences: 'Általános',
    Tuning: 'Hangolás',
    DangerZone: 'Veszély Zóna',
    TempoName: 'Tempó',
    TempoDescription: 'Az akkordkör tempója BPM-ben.',
    NotesInABarName: 'Hangok egy ütemben',
    NotesInABarDescription: 'Alapértelmezett hangmennyiség egy ütemben.',
    TuningName: 'Hangolás',
    TuningDescription:
      'Itt beállíthatod a hangszered hangolását, illetve húrjait.',
    TuningAddString: 'Húr hozzáadása',
    DeleteProgressionName: 'Akkordkör törlése',
    DeleteProgressionDescription:
      'Ennek a gombnak a megnyomásával véglegesen törlöd ezt az akkordkört.',
    DeleteProgressionButton: 'Véglegesen törlöm ezt az akkordkört',
  },
  Score: {
    AlphaTabRenderedBy: 'Tabot és kottát generálta:',
  },
  Templates: {
    EmptyName: 'Új Akkordkör',
    EmptyDescription: 'Teljesen üres, új akkordkör.',
    AMinorBluesName: 'A Moll Blues',
    AMinorBluesDescription:
      'Egyszerű moll blues az i, iv és v akkordok gyakorlására.',
    AutumnLeavesName: 'Autumn Leaves',
    AutumnLeavesDescription:
      'Autumn Leaves G mollban. A dúr és moll ii-V-I-ek gyakorlására.',
    AllMyLovingName: 'All My Loving',
    AllMyLovingDescription:
      'A versszak a Beatles "All My Loving" című számából.',
  },
  Errors: {
    ScoreCannotBeGenerated: 'Kotta/Tab nem generálható!',
    WhatsMissing: 'Mi hiányzik?',
    AtLeast2Bars: 'Legyen legalább 2 ütemed.',
    AtLeast1Chord: 'Minden ütemben legyen legalább 1 akkord.',
    NeedsTransitions:
      'Minden akkordban legyen beállítva az átmenet a következő akkordba.',
    MissingChord: 'Hiányzó akkord! Ez valószínűleg egy szoftverhiba eredménye.',
    MissingBar: 'Hiányzó ütem! Ez valószínűleg egy szoftverhiba eredménye.',
    Delete: 'Törlés',
    InvalidChord: 'Ismeretlen akkord',
    NoTransitionsMessage:
      'Nincs ilyen átmenet! Változtass az alaphangon, a beállításokon, vagy a keresett szövegen!',
  },
  '404': {
    MissingProgression: 'Ez az akkordkör nem létezik!',
    GoBack: 'Vissza a főoldalra',
    '404': '404 - Ez az oldal nem csinál semmit.',
  },
}
