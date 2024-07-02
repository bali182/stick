import { css, cx } from '@emotion/css'
import { FC } from 'react'
import {
  RiPauseLargeFill,
  RiPlayLargeFill,
  RiStopLargeFill,
} from 'react-icons/ri'
import { RxLoop } from 'react-icons/rx'

export type BasicButtonProps = {
  onClick: () => void
}

export type ToggleButtonProps = BasicButtonProps & {
  isToggled: boolean
}

export type SliderProps = {
  value: number
  onChange: (value: number) => void
}

const playButtonStyle = css`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #ffffff15;
  color: #ffffff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, outline 0.2s ease;
  border: none;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: 2px solid #ffffff;
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
  transition: background-color 0.2s ease, outline 0.2s ease;
  background-color: #ffffff20;
  border: none;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: 2px solid #ffffff;
  }
`

const toogledButtonStyle = css`
  background-color: #ffffff60;
  &:hover {
    background-color: #ffffff60;
  }
`

const volumeSliderStyle = css`
  appearance: none;
  background-color: transparent;
  width: 180px;
  position: absolute;
  left: 40px;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: 8px;
    background-color: green;
    border-radius: 8px;
  }

  &::-moz-range-track {
    position: relative;
    height: 8px;
    background-color: green;
    border-radius: 8px;
  }

  &::-webkit-slider-thumb {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: purple;
    border: 2px solid white;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    top: 50%;
    translate: 0 -50%;
  }

  &::-moz-range-thumb {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: purple;
    border: 2px solid white;
    border-radius: 8px;
    width: 24px;
    height: 24px;
  }

  &::-moz-range-progress {
    height: 8px;
    background-color: orangered;
    border-radius: 8px;
  }
`

export const PlayButton: FC<ToggleButtonProps> = ({ onClick, isToggled }) => {
  return (
    <button className={playButtonStyle} onClick={onClick}>
      {isToggled ? <RiPauseLargeFill /> : <RiPlayLargeFill />}
    </button>
  )
}

export const LoopButton: FC<ToggleButtonProps> = ({ onClick, isToggled }) => {
  const className = cx(
    secondaryButtonStyle,
    isToggled ? toogledButtonStyle : null,
  )
  return (
    <button className={className} onClick={onClick}>
      <RxLoop />
    </button>
  )
}

export const StopButton: FC<BasicButtonProps> = ({ onClick }) => {
  return (
    <button className={secondaryButtonStyle} onClick={onClick}>
      <RiStopLargeFill />
    </button>
  )
}

export const VolumeSlider: FC<SliderProps> = ({ value, onChange }) => {
  return (
    <input
      type="range"
      className={volumeSliderStyle}
      min={0}
      max={1}
      step={0.02}
      value={value}
      onChange={(event) => onChange(event.target.valueAsNumber)}
    />
  )
}
