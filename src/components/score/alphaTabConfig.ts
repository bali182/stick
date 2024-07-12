import { AlphaTabApi } from '@coderline/alphatab'

// Get the constructor type which is a union
type Settings = ConstructorParameters<typeof AlphaTabApi>[1]
// Extract the JSON type with some ts magic
type ExtractJsonType<T> = T extends { fillFromJson: any } ? never : T
type SettingsJson = ExtractJsonType<Settings>

// Extract the necessary types from the Json type
type CoreSettingsJson = Exclude<SettingsJson['core'], undefined>
type PlayerSettingsJson = Exclude<SettingsJson['player'], undefined>
type DisplaySettingsJson = Exclude<SettingsJson['display'], undefined>

const core: Partial<CoreSettingsJson> = {
  tex: true,
  fontDirectory: '/font/',
  engine: 'svg',
}

// Typings are unusable here
const display: DisplaySettingsJson = {
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

const player: Partial<PlayerSettingsJson> = {
  enableCursor: true,
  enableAnimatedBeatCursor: true,
  enableElementHighlighting: true,
  enablePlayer: true,
  enableUserInteraction: true,
  soundFont:
    'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
}

export const alphaTabConfig: SettingsJson = {
  core,
  display,
  player,
}
