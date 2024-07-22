import { useRef, useEffect, FC, useState } from 'react'
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
import {
  setTrackVolume,
  useMetronomeVolume,
  useTrackVolume,
} from './volumeHooks'
import { TbPiano } from 'react-icons/tb'
import { GiGuitarBassHead } from 'react-icons/gi'
import { PiMetronomeBold } from 'react-icons/pi'
import { useActiveProgression } from '../../useActiveProgression'

export type ScoreProps = {
  progressionId: string
}

const bottomBarStyle = css`
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
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
  const wrapperRef = useRef<HTMLElement>(null)
  const scrollRef = useRef<HTMLElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()

  const [isLoading, setLoading] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const progression = useActiveProgression()
  const tex = useSelector<AppState, string>((state) =>
    getAlphaTex(state, progression!.id),
  )
  const { isLooping, bassVolume, metronomeVolume, chordsVolume } = useSelector<
    AppState,
    ConfigState
  >((state) => state.config)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const { current: api } = apiRef
    api?.tex?.(tex)
  }, [tex])

  useEffect(() => {
    const { current: api } = apiRef
    if (!isNil(api)) {
      api.isLooping = isLooping
    }
  }, [isLooping])

  useTrackVolume(apiRef, 0, bassVolume)
  useTrackVolume(apiRef, 1, chordsVolume)
  useMetronomeVolume(apiRef, metronomeVolume)

  useEffect(() => {
    const api = new AlphaTabApi(
      mainRef.current!,
      alphaTabConfig(scrollRef.current!),
    )

    api.renderStarted.on(() => setLoading(true))
    api.renderFinished.on(() => setLoading(false))
    api.playerStateChanged.on(({ state }) =>
      setPlaying(state === synth.PlayerState.Playing),
    )

    api.render()
    api.tex(tex, [0])
    api.isLooping = isLooping
    api.metronomeVolume = metronomeVolume
    setTrackVolume(api, 0, bassVolume)
    setTrackVolume(api, 1, chordsVolume)
    apiRef.current = api

    return () => api.destroy()
  }, [])

  const onPlayPause = () => apiRef.current?.playPause()
  const onLoop = () =>
    dispatch(configSlice.actions.updateConfig({ isLooping: !isLooping }))
  const onStop = () => apiRef.current?.stop()
  const onBassVolumeChange = (bassVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ bassVolume }))
  const onChordsVolumeChange = (chordsVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ chordsVolume }))
  const onMetronomeVolumeChange = (metronomeVolume: number) =>
    dispatch(configSlice.actions.updateConfig({ metronomeVolume }))

  return (
    <div className={wrapStyle} ref={wrapperRef as any}>
      <ScoreOverlay isVisible={isLoading} />
      <div className={contentStyle}>
        <div className={viewportStyle} ref={scrollRef as any}>
          <div className="at-main" ref={mainRef as any}></div>
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
