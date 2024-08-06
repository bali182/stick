import { useRef, useEffect, FC, useState, useCallback } from 'react'
import { AlphaTabApi, synth } from '@coderline/alphatab'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { alphaTabConfig } from './alphaTabConfig'
import { css } from '@emotion/css'
import { AlphaTabLogo } from './AlphaTabLogo'
import { LoopButton, PlayButton, StopButton } from './ScoreControls'
import { ScoreOverlay } from './ScoreOverlay'
import { VolumeSlider } from './VolumeSlider'
import { isNil } from '../../model/isNil'
import { AppState, ConfigState } from '../../state/types'
import { configSlice } from '../../state/config'
import { getAlphaTex } from '../../state/selectors/getAlphaTex'
import { TbPiano } from 'react-icons/tb'
import { GiGuitarBassHead } from 'react-icons/gi'
import { PiMetronomeBold } from 'react-icons/pi'
import { useActiveProgression, useAlphaTex, useConfig } from '../../modelHooks'
import { useAlphaTab } from './useAlphaTab'

export type ScoreProps = {
  progressionId: string
}

const bottomBarStyle = css`
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 160px;
  width: 100%;
  background-color: #ffffff15;
`

const wrapStyle = css`
  //.at-wrap
  width: 100vw;
  height: calc(100vh - 100px);
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`

const contentStyle = css`
  // .at-content
  position: relative;
  overflow: hidden;
  flex: 1 1 auto;
`

const viewportStyle = css`
  // .at-viewport
  overflow-y: auto;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  padding: 20px;
`

const volumeContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const controlsContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const Score: FC = () => {
  const [scrollArea, setScrollArea] = useState<HTMLElement>()
  const [root, setRoot] = useState<HTMLElement>()

  const setScrollAreaCallback = useCallback((node: HTMLDivElement | null) => {
    setScrollArea(node ?? undefined)
  }, [])

  const setRootCallback = useCallback((node: HTMLDivElement | null) => {
    setRoot(node ?? undefined)
  }, [])

  const progression = useActiveProgression()
  const { isLooping, bassVolume, metronomeVolume, chordsVolume } = useConfig()
  const tex = useAlphaTex(progression?.id!)

  const dispatch = useDispatch<AppDispatch>()

  const { api, isPlaying, isLoading } = useAlphaTab({
    tex,
    bassVolume,
    chordsVolume,
    isLooping,
    metronomeVolume,
    root,
    scrollArea,
  })

  const onPlayPause = () => api?.playPause()
  const onLoop = () =>
    dispatch(configSlice.actions.updateConfig({ isLooping: !isLooping }))
  const onStop = () => api?.stop()
  const onBassVolumeChange = (bassVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ bassVolume }))
  const onChordsVolumeChange = (chordsVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ chordsVolume }))
  const onMetronomeVolumeChange = (metronomeVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ metronomeVolume }))

  return (
    <div className={wrapStyle}>
      <ScoreOverlay isVisible={isLoading} />
      <div className={contentStyle}>
        <div className={viewportStyle} ref={setScrollAreaCallback}>
          <div className="at-main" ref={setRootCallback}></div>
        </div>
      </div>
      <div className={bottomBarStyle}>
        <div className={volumeContainerStyle}>
          <VolumeSlider
            Icon={PiMetronomeBold}
            value={metronomeVolume}
            onChange={onMetronomeVolumeChange}
          />
          <VolumeSlider
            Icon={GiGuitarBassHead}
            value={bassVolume}
            onChange={onBassVolumeChange}
          />
          <VolumeSlider
            Icon={TbPiano}
            value={chordsVolume}
            onChange={onChordsVolumeChange}
          />
        </div>
        <div className={controlsContainerStyle}>
          <StopButton onClick={onStop} />
          <PlayButton onClick={onPlayPause} isToggled={isPlaying} />
          <LoopButton onClick={onLoop} isToggled={isLooping} />
        </div>
        <AlphaTabLogo />
      </div>
    </div>
  )
}
