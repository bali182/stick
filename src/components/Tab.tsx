import { useRef, useEffect, FC, useState, useMemo } from 'react'
import { AlphaTabApi, synth } from '@coderline/alphatab'
import { ATTrack } from '../alphaTex/model'
import { toAlphaTex } from '../alphaTex/toAlphaTex'
import { isNil } from '../model/utils'
import { useSelector } from 'react-redux'
import { getAlphaTexModel } from '../state/getAlphaTexModel'
import { AppState } from '../state/store'
import { tabConfig } from './tabConfig'
import { css, cx } from '@emotion/css'
import {
  RiPauseLargeFill,
  RiPlayLargeFill,
  RiStopLargeFill,
} from 'react-icons/ri'
import { RxLoop } from 'react-icons/rx'
import { AlphaTabLogo } from './AlphaTabLogo'

export type TabProps = {
  progressionId: string
}

const bottomBarStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 8px;
  height: 160px;
  width: 100%;
  border-top: 1px solid #ffffff30;
`

const playButtonStyle = css`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #ffffff20;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #ffffff40;
  }
`

const secondaryButtonStyle = css`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: transparent;
  color: #ffffff;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #ffffff20;
  &:hover {
    background-color: #ffffff40;
  }
`

const toogledButtonStyle = css`
  background-color: #ffffff60;
  &:hover {
    background-color: #ffffff60;
  }
`

export const Tab: FC<TabProps> = ({ progressionId }) => {
  const wrapperRef = useRef<HTMLElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const apiRef = useRef<AlphaTabApi>()

  const [isLoading, setLoading] = useState(false)
  const [isPlaying, setPlaying] = useState(false)
  const [isLooping, setLooping] = useState(false)

  const alphaTexModel = useSelector<AppState, ATTrack>((state) =>
    getAlphaTexModel(state, progressionId),
  )

  const tex = useMemo(() => toAlphaTex(alphaTexModel), [alphaTexModel])

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

  useEffect(() => {
    const api = new AlphaTabApi(mainRef.current!, tabConfig)

    api.renderStarted.on(() => setLoading(true))
    api.renderFinished.on(() => setLoading(false))
    api.playerStateChanged.on((e) =>
      setPlaying(e.state === synth.PlayerState.Playing),
    )

    api.render()
    api.tex(tex)
    apiRef.current = api

    return () => api.destroy()
  }, [])

  const onPlayPause = () => apiRef.current?.playPause()
  const onLoop = () => setLooping(!isLooping)
  const onStop = () => apiRef.current?.stop()

  return (
    <div className="at-wrap" ref={wrapperRef as any}>
      {isLoading ? (
        <div className="at-overlay">
          <div className="at-overlay-content">Music sheet is loading</div>
        </div>
      ) : null}
      <div className="at-content">
        <div className="at-viewport">
          <div className="at-main" ref={mainRef as any}></div>
        </div>
      </div>
      <div className={bottomBarStyle}>
        <AlphaTabLogo />
        <div className={secondaryButtonStyle} onClick={onStop}>
          <RiStopLargeFill />
        </div>
        <div className={playButtonStyle} onClick={onPlayPause}>
          {isPlaying ? <RiPauseLargeFill /> : <RiPlayLargeFill />}
        </div>
        <div
          className={cx(
            secondaryButtonStyle,
            isLooping ? toogledButtonStyle : null,
          )}
          onClick={onLoop}
        >
          <RxLoop />
        </div>
      </div>
    </div>
  )
}
