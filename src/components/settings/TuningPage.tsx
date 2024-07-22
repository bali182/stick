import { css } from '@emotion/css'
import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { PitchedNote } from '../../model/types'
import { progressionsSlice } from '../../state/progressions'
import { lerp, moveDown, moveUp, removeByIndex } from '../../model/utils'
import {
  defaultComponents,
  defaultStyles,
  DropdownProxy,
} from '../DropdownProxy'
import {
  DEFAULT_4_STRING_BASS_TUNING,
  DEFAULT_5_STRING_BASS_TUNING,
  NOTES,
} from '../../model/constants'
import {
  PiArrowDownBold,
  PiArrowUpBold,
  PiMusicNoteSimple,
  PiPlusBold,
  PiX,
} from 'react-icons/pi'
import { useActiveProgression } from '../../useActiveProgression'

const sectionStyle = css`
  display: flex;
  flex-direction: column;
  padding: 14px;
  pointer-events: auto;
`

const labelStyle = css`
  font-size: 1em;
  color: #ffffff;
  margin-bottom: 2px;
  pointer-events: auto;
`

const descriptionStyle = css`
  font-size: 0.8em;
  margin-bottom: 10px;
  color: #ffffffaa;
`

const containerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const rowStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

const stringStyle = css`
  background-color: #ffffffaa;
  flex: 1 1 1px;
`

const dropdownContainer = css`
  width: 110px;
`

const buttonsContainerStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6px;
`

const buttonStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: none;
  color: #ffffffdd;
  padding: 8px 16px;
  gap: 6px;
  cursor: pointer;
  font-size: 1em;
  border-radius: 6px;
  background-color: transparent;
  background-color: #ffffff10;
  &:hover {
    color: #fff;
    background-color: #ffffff20;
  }
  &:disabled {
    background-color: transparent;
    color: #ffffff50;
    cursor: not-allowed;
  }
`

const buttonsContainer = css`
  display: flex;
  flex-direction: row;
`

const leftButtons = css`
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 10px;
`
const hrStyle = css`
  border-color: #ffffff66;
  margin: 20px 0px;
`

export const TuningPage: FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const progression = useActiveProgression()!
  const tuning = progression?.tuning!

  function updateTuning(tuning: PitchedNote[]) {
    dispatch(
      progressionsSlice.actions.updateProgression({
        progression: {
          ...progression,
          tuning,
        },
      }),
    )
  }

  const updateStringTuning = (index: number) => (newNote: PitchedNote) => {
    updateTuning(tuning.map((note, i) => (i === index ? newNote : note)))
  }

  const moveStringUp = (index: number) => () => {
    updateTuning(moveUp(tuning, index))
  }

  const moveStringDown = (index: number) => () => {
    updateTuning(moveDown(tuning, index))
  }

  const removeString = (index: number) => () => {
    updateTuning(removeByIndex(tuning, index))
  }

  const addString = () => {
    updateTuning([...tuning, 'B0'])
  }

  const set4StringStandard = () => {
    updateTuning(DEFAULT_4_STRING_BASS_TUNING)
  }

  const set5StringStandard = () => {
    updateTuning(DEFAULT_5_STRING_BASS_TUNING)
  }

  return (
    <div className={sectionStyle}>
      <label className={labelStyle}>Tuning</label>
      <span className={descriptionStyle}>
        You can change the tuning here to the exact tuning you are using.
      </span>
      <div className={containerStyle}>
        {tuning.map((note, i) => {
          const height = lerp(6, 18, i / tuning.length)
          const borderRadius = height / 2
          return (
            <div className={rowStyle} key={`${note}-${i}`}>
              <div className={dropdownContainer}>
                <DropdownProxy
                  value={note}
                  values={NOTES}
                  onChange={updateStringTuning(i)}
                  components={defaultComponents}
                  styles={defaultStyles}
                />
              </div>
              <div className={stringStyle} style={{ borderRadius, height }} />
              <div className={buttonsContainerStyle}>
                <button
                  className={buttonStyle}
                  disabled={i === 0}
                  onClick={moveStringUp(i)}
                >
                  <PiArrowUpBold />
                </button>

                <button
                  className={buttonStyle}
                  disabled={i === tuning.length - 1}
                  onClick={moveStringDown(i)}
                >
                  <PiArrowDownBold />
                </button>
                <button className={buttonStyle} onClick={removeString(i)}>
                  <PiX />
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <hr className={hrStyle} />
      <div className={buttonsContainer}>
        <div className={leftButtons}>
          <button className={buttonStyle} onClick={set4StringStandard}>
            <PiMusicNoteSimple /> E A D G
          </button>
          <button className={buttonStyle} onClick={set5StringStandard}>
            <PiMusicNoteSimple /> B E A D G
          </button>
        </div>
        <button className={buttonStyle} onClick={addString}>
          <PiPlusBold /> Add String
        </button>
      </div>
    </div>
  )
}
