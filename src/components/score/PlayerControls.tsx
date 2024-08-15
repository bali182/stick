import { FC } from 'react'
import { css } from '@emotion/css'
import { VolumeSlider } from './VolumeSlider'
import { PiMetronomeBold } from 'react-icons/pi'
import { GiGuitarBassHead } from 'react-icons/gi'
import { TbPiano } from 'react-icons/tb'
import { LoopButton, PlayButton, StopButton } from './ScoreControls'
import { SVGAlphaTabLogo } from './SVGAlphaTabLogo'

const playerControlsStyle = css`
  padding: 0px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 160px;
  width: 100%;
  background-color: #ffffff15;
`

const volumeContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-self: start;
`

const middleContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
`

const controlsContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-self: center;
  gap: 10px;
`

const logoStyle = css`
  justify-self: end;
`

export type PlayerControlsProps = {
  isLooping: boolean
  isPlaying: boolean
  bassVolume: number
  metronomeVolume: number
  chordsVolume: number
  bpm: number
  onPlayPause: () => void
  onLoop: () => void
  onStop: () => void
  onBassVolumeChange: (bassVolume: number) => void
  onChordsVolumeChange: (chordsVolume: number) => void
  onMetronomeVolumeChange: (metronomeVolume: number) => void
  onTempoChange: (bpm: number) => void
}

export const PlayerControls: FC<PlayerControlsProps> = ({
  isPlaying,
  isLooping,
  bassVolume,
  metronomeVolume,
  chordsVolume,
  onPlayPause,
  onLoop,
  onStop,
  onBassVolumeChange,
  onChordsVolumeChange,
  onMetronomeVolumeChange,
}) => {
  return (
    <div className={playerControlsStyle}>
      <div className={volumeContainerStyle}>
        <VolumeSlider
          Icon={PiMetronomeBold}
          value={metronomeVolume}
          onChange={onMetronomeVolumeChange}
          data-tooltip="Tooltips.Score.MetronomeVolume"
        />
        <VolumeSlider
          Icon={GiGuitarBassHead}
          value={bassVolume}
          onChange={onBassVolumeChange}
          data-tooltip="Tooltips.Score.BassVolume"
        />
        <VolumeSlider
          Icon={TbPiano}
          value={chordsVolume}
          onChange={onChordsVolumeChange}
          data-tooltip="Tooltips.Score.ChordsVolume"
        />
      </div>
      <div className={middleContainerStyle}>
        <div className={controlsContainerStyle}>
          <StopButton onClick={onStop} data-tooltip="Tooltips.Score.Stop" />
          <PlayButton
            onClick={onPlayPause}
            isToggled={isPlaying}
            data-tooltip="Tooltips.Score.PlayPause"
          />
          <LoopButton
            onClick={onLoop}
            isToggled={isLooping}
            data-tooltip="Tooltips.Score.Loop"
          />
        </div>
      </div>
      <SVGAlphaTabLogo className={logoStyle} />
    </div>
  )
}
