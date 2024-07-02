import { css } from '@emotion/css'
import { FC } from 'react'
import { RiVolumeMuteFill, RiVolumeUpFill } from 'react-icons/ri'

const containerStyle = css`
  position: absolute;
  left: 40px;
  display: flex;
  flex-direction: row;
  gap: 14px;
  align-items: center;
  justify-content: center;
`

const volumeSliderStyle = css`
  appearance: none;
  background-color: transparent;
  width: 180px;

  &::-webkit-slider-runnable-track {
    position: relative;
    height: 8px;
    background-color: #ffffff60;
    border-radius: 8px;
  }

  &::-moz-range-track {
    position: relative;
    height: 8px;
    background-color: #ffffff60;
    border-radius: 8px;
  }

  &::-webkit-slider-thumb {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: #ffffffdd;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    top: 50%;
    translate: 0 -50%;
    transition: background-color 0.2s ease, transform 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      transform: scale(1.4);
    }
  }

  &::-moz-range-thumb {
    box-sizing: border-box;
    appearance: none;
    position: relative;
    background-color: #ffffffdd;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    transition: background-color 0.2s ease, transform 0.2s ease;
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      transform: scale(1.4);
    }
  }
`

const iconStyle = css`
  font-size: 1.6em;
  color: #ffffffdd;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
`

export type VolumeSliderProps = {
  value: number
  onChange: (value: number) => void
}

export const VolumeSlider: FC<VolumeSliderProps> = ({ value, onChange }) => {
  return (
    <div className={containerStyle}>
      <RiVolumeMuteFill className={iconStyle} onClick={() => onChange(0)} />
      <input
        type="range"
        className={volumeSliderStyle}
        min={0}
        max={1}
        step={0.02}
        value={value}
        onChange={(event) => onChange(event.target.valueAsNumber)}
      />
      <RiVolumeUpFill className={iconStyle} onClick={() => onChange(1)} />
    </div>
  )
}
