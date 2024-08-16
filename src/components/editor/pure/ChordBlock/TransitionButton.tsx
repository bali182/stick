import { FC, useState } from 'react'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { FiTrash2 } from 'react-icons/fi'
import { RiFootprintFill } from 'react-icons/ri'
import { css, cx } from '@emotion/css'
import { isNil } from '../../../../model/isNil'
import { TransitionSelectorList } from './TransitionSelectorList'
import { useOnEscape } from '../../useOnEscape'
import { Transition, TransitionCategory } from '../../../../model/types'
import { useTranslation } from 'react-i18next'

export type TransitionButtonProps = {
  transition?: Transition
  categories: TransitionCategory[]
  onChange: (transition: Transition | undefined) => void
}

const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`

const transitionButtonStyle = css`
  color: #ffffffdd;
  border-radius: 6px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, background-color 0.2s ease;
  user-select: none;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: center;
  border: none;
  background-color: #ffffff30;
  &:hover {
    background-color: #ffffff40;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
`

const addTransitionIconStyle = css`
  color: #fff;
  cursor: pointer;
  position: relative;
  display: inline;
  top: 3px;
`

const transitionNameBtnStyle = css`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  padding: 4px 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 1.2em;
  border: none;
  color: #fff;
  max-width: 135px;
  min-width: 40px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: #ffffff40;
  }
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
`

const sideButtonStyle = css`
  flex-shrink: 0;
  padding: 4px 10px;
  display: flex;
  flex-direction: row;
  border: none;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
    background-color: #ffffff40;
  }
  &:hover {
    background-color: #ffffff40;
  }
`

const removeButtonStyle = cx(
  sideButtonStyle,
  css`
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `,
)

const buttonIconStyle = css`
  position: relative;
  top: -1px;
  font-size: 1em;
  flex-shrink: 0;
`

const walkStyle = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 10px;
  font-size: 1.2em;
`

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 280px;
  height: auto;
  max-height: 340px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

export const TransitionButton: FC<TransitionButtonProps> = ({
  transition,
  categories,
  onChange,
}) => {
  const { t } = useTranslation()
  const [isOpen, setOpen] = useState(false)

  const close = () => setOpen(false)
  const toggle = () => setOpen(!isOpen)
  const onTransitionDeleted = () => {
    onChange(undefined)
    close()
  }

  useOnEscape(close, isOpen)

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={close}
      clickOutsideCapture={true}
      positions={['bottom', 'right', 'left']}
      content={({ position, childRect, popoverRect }) => (
        <ArrowContainer
          position={position}
          childRect={childRect}
          popoverRect={popoverRect}
          arrowColor="#181818"
          arrowSize={10}
        >
          <div className={popoverStyle}>
            <TransitionSelectorList
              setOpen={setOpen}
              onChange={onChange}
              transition={transition}
              categories={categories}
            />
          </div>
        </ArrowContainer>
      )}
    >
      <div className={containerStyle}>
        {isNil(transition) && (
          <button
            className={transitionButtonStyle}
            onClick={toggle}
            tabIndex={-1}
            data-tooltip="Tooltips.Progression.Transition"
          >
            <div className={walkStyle}>
              <RiFootprintFill className={addTransitionIconStyle} />
              &nbsp;
              {t('Progression.Transition')}
            </div>
          </button>
        )}
        {!isNil(transition) && (
          <div className={transitionButtonStyle}>
            <button
              className={transitionNameBtnStyle}
              onClick={toggle}
              tabIndex={-1}
              data-tooltip="Tooltips.Progression.Transition"
            >
              {transition.name}
            </button>
            <button
              className={removeButtonStyle}
              onClick={onTransitionDeleted}
              tabIndex={-1}
              data-tooltip="Tooltips.Progression.DeleteTransition"
            >
              <FiTrash2 className={buttonIconStyle} />
            </button>
          </div>
        )}
      </div>
    </Popover>
  )
}
