import { AlphaTabApi } from '@coderline/alphatab'
import { isNil } from '../../model/isNil'
import { RefObject, useEffect } from 'react'

export function useTrackVolume(
  apiRef: RefObject<AlphaTabApi | undefined>,
  trackIndex: number,
  volume: number,
): void {
  useEffect(() => {
    setTrackVolume(apiRef.current, trackIndex, volume)
  }, [trackIndex, volume])
}

export function useMetronomeVolume(
  apiRef: RefObject<AlphaTabApi | undefined>,
  volume: number,
): void {
  useEffect(() => {
    const api = apiRef.current
    if (isNil(api)) {
      return
    }
    api.metronomeVolume = volume
  }, [volume])
}

export function setTrackVolume(
  api: AlphaTabApi | undefined | null,
  trackIndex: number,
  volume: number,
): void {
  if (isNil(api)) {
    return
  }
  const track = api.score?.tracks[trackIndex]
  if (isNil(track)) {
    return
  }
  api.changeTrackVolume([track], volume)
}
