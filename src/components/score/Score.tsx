import { FC, useState, useCallback } from 'react'
import { css } from '@emotion/css'
import { ScoreOverlay } from './ScoreOverlay'
import { useActiveProgression, useAlphaTex, useConfig } from '../../modelHooks'
import { useAlphaTab } from './useAlphaTab'
import { PlayerControls } from './PlayerControls'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { configSlice } from '../../state/config'
import { progressionsSlice } from '../../state/progressions'

export type ScoreProps = {
  progressionId: string
}

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
  const bpm = progression?.bpm ?? 120
  const { isLooping, bassVolume, metronomeVolume, chordsVolume } = useConfig()
  const tex = useAlphaTex(progression?.id!)

  const dispatch = useDispatch<AppDispatch>()

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
  const onTempoChange = (bpm: number) => {
    dispatch(
      progressionsSlice.actions.updateProgression({
        progressionId: progression?.id!,
        updates: { bpm },
      }),
    )
  }

  const { api, isPlaying, isLoading } = useAlphaTab({
    tex,
    bassVolume,
    chordsVolume,
    isLooping,
    metronomeVolume,
    root,
    scrollArea,
    bpm,
  })

  return (
    <div className={wrapStyle}>
      <ScoreOverlay isVisible={isLoading} />
      <div className={contentStyle}>
        <div className={viewportStyle} ref={setScrollAreaCallback}>
          <div className="at-main" ref={setRootCallback}></div>
        </div>
      </div>
      <PlayerControls
        bpm={bpm}
        isPlaying={isPlaying}
        isLooping={isLooping}
        bassVolume={bassVolume}
        chordsVolume={chordsVolume}
        metronomeVolume={metronomeVolume}
        onLoop={onLoop}
        onStop={onStop}
        onPlayPause={onPlayPause}
        onTempoChange={onTempoChange}
        onBassVolumeChange={onBassVolumeChange}
        onChordsVolumeChange={onChordsVolumeChange}
        onMetronomeVolumeChange={onMetronomeVolumeChange}
      />
    </div>
  )
}
