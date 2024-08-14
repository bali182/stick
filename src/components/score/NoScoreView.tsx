import { css } from '@emotion/css'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { PiWarning } from 'react-icons/pi'

const noScoreViewStyle = css`
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
`
const warningIconStyle = css`
  font-size: 8em;
`
const titleStyle = css`
  font-size: 2.6em;
  font-weight: bold;
`

const fixesContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6px;
  background-color: #ffffff20;
  border-radius: 10px;
  padding: 12px 20px;
  font-size: 1.1em;
  margin-top: 20px;
`
const howToFixStyle = css`
  font-size: 1.2em;
  font-weight: bold;
`

const listStyle = css`
  display: block;
  list-style-position: inside;
`

export const NoScoreView: FC = () => {
  const { t } = useTranslation()
  return (
    <div className={noScoreViewStyle}>
      <PiWarning className={warningIconStyle} />
      <span className={titleStyle}>{t('Errors.ScoreCannotBeGenerated')}</span>
      <div className={fixesContainerStyle}>
        <span className={howToFixStyle}>{t('Errors.WhatsMissing')}</span>
        <ul className={listStyle}>
          <li>{t('Errors.AtLeast2Bars')}</li>
          <li>{t('Errors.AtLeast1Chord')}</li>
          <li>{t('Errors.NeedsTransitions')}</li>
        </ul>
      </div>
    </div>
  )
}
