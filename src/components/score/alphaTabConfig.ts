import { CoreSettings, PlayerSettings } from '@coderline/alphatab'

const core: Partial<CoreSettings> = {
  tex: true,
  fontDirectory: '/font/',
  engine: 'svg',
}

// Typings are unusable here
const display = {
  staveProfile: 'Default',
  scale: 1.4,
  justifyLastSystem: true,
  resources: {
    staffLineColor: '#ffffff80',
    barSeparatorColor: '#fff',
    mainGlyphColor: '#fff',
    secondaryGlyphColor: '#fff',
    scoreInfoColor: '#fff',
    barNumberColor: '#fff',
  },
}

const player: Partial<PlayerSettings> = {
  enableCursor: true,
  enableAnimatedBeatCursor: true,
  enableElementHighlighting: true,
  enablePlayer: true,
  enableUserInteraction: true,
  soundFont:
    'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
}

export const alphaTabConfig = {
  core,
  display,
  player,
}
