import { json } from '@coderline/alphatab'

const core: json.CoreSettingsJson = {
  tex: true,
  fontDirectory: 'font/',
  engine: 'svg',
}

// Typings are unusable here
const display: json.DisplaySettingsJson = {
  staveProfile: 'Default',
  justifyLastSystem: true,
  barsPerRow: 4,
  resources: {
    staffLineColor: '#ffffff80',
    barSeparatorColor: '#fff',
    mainGlyphColor: '#fff',
    secondaryGlyphColor: '#fff',
    scoreInfoColor: '#fff',
    barNumberColor: '#fff',
  },
}

const player: json.PlayerSettingsJson = {
  enableCursor: true,
  enableAnimatedBeatCursor: true,
  enableElementHighlighting: true,
  enablePlayer: true,
  enableUserInteraction: true,
  soundFont:
    'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
}

export const alphaTabConfig: json.SettingsJson = {
  core,
  display,
  player,
}
