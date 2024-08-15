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
    General: 'Általános',
    Progression: 'Akkordkör',
    Tuning: 'Hangolás',
    DangerZone: 'Veszély Zóna',
    TempoName: 'Tempó',
    TempoDescription: 'Az akkordkör tempója BPM-ben.',
    ShowTooltipsName: 'Súgó (Tooltip-ek) engedélyezése',
    ShowTooltipsDescription: 'Itt ki és bekapcsolhatod a Súgót (Tooltip-eket)',
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
  Tooltips: {
    Progression: {
      FillTransitions: `Az akkordok közötti átmenetek automatikus kitöltése. Ahhoz hogy ez működjön legyen legalább 2 ütemed, és minden ütemben legyen legalább 1 akkord. <br/><br/><strong>Ez a funkció a kitöltött átmeneteket nem változtatja meg.</strong>`,
      ClearTransitions: `Az összes átmenet törlése. <strong>Ez az akció nem vonható vissza.</strong><br/><br>Ideális, ha új átmenetekkel akarsz kísérletezni.`,
      AddBar: 'Új ütem hozzáadása az akkordkörhöz.',
      AddChord: 'Új akkord hozzáadása az ütemhez.',
      SelectRoot:
        'Válaszd ki az akkord alaphangját. Az akkord átmenetének hangjai ehhez a hanghoz képest lesznek számítva.',
      SelectNoteCount:
        'Válaszd ki hány hangból álló átmenetet szeretnél használni ehhez az akkordhoz. Alapértelmezetten az akkordkörben definiált mennyiségű hang lesz használva.',

      Transition: `Válasz egy átmenetet a következő akkordhoz.<br/>
      <br/><strong>R</strong> = Az akkord alpahangja
      <br/><strong>3</strong> = Az akkord terce
      <br/><strong>5</strong> = Az akkord kvintje
      <br/><strong>NR</strong> = A következő akkord alpahangja
      <br/><br/><strong>↑</strong> - az alaphanghoz képes magasabb <strong>↓</strong> - illetve az alaphanghoz képest mélyebb akkordhangot jelent. +x vagy -x az akkordhangtól x félhang távolságra levő hangot jelent.`,
      DeleteBar: 'Az ütem törlése.',
      DeleteChord: 'Az akkord törlése.',
      DeleteTransition: 'Az átmenet törlése.',
      SplitBar: 'Új akkord hozzáadása az ütemhez.',
      CloneBar: 'Az ütem duplikálása.',
      DragBar: 'Az ütem mozgatása.',
    },
    Score: {
      Stop: 'Lejátszás megállítása, és ugrás az elejére',
      PlayPause: 'Lejátszás vagy a lejátszás szüneteltetése',
      Loop: 'A kijelölt szakasz ismétlésének ki és bekapcsolása',
      MetronomeVolume: 'Metronóm hangereje',
      BassVolume: 'Basszus hangereje',
      ChordsVolume: 'Akkordok/kíséret hangereje',
    },
  },
}
