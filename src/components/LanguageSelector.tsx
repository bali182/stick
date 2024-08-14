import { FC, useState } from 'react'
import { ListSelector } from './editor/ListSelector'
import { useTranslation } from 'react-i18next'
import { ArrowContainer, Popover } from 'react-tiny-popover'
import { css, cx } from '@emotion/css'
import { buttonStyle } from './commonStyles'
import { Language } from '../model/types'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../state/store'
import { configSlice } from '../state/config'

export type LanguageSelectorList = {
  value: string
  onChange: (language: Language) => void
}

const languages: Language[][] = [['en', 'hu']]

const nameMapping: Record<Language, string> = {
  en: 'English',
  hu: 'Magyar',
}

const getChildren = (lngs: Language[]) => lngs
const getCategoryKey = () => 'lng'
const getItemKey = (lng: Language) => lng
const matches = () => true
const getCategoryLabel = () => ''
const getItemLabel = (lng: Language) => nameMapping[lng]

const LanguageList: FC<LanguageSelectorList> = ({ onChange }) => {
  return (
    <ListSelector<Language[], Language>
      categories={languages}
      canSearch={false}
      canCreate={false}
      showCategories={false}
      onItemClick={onChange}
      getChildren={getChildren}
      getCategoryKey={getCategoryKey}
      getCategoryLabel={getCategoryLabel}
      getItemKey={getItemKey}
      getItemLabel={getItemLabel}
      matches={matches}
      noHitsLabel={''}
    />
  )
}

const popoverStyle = css`
  background-color: #181818;
  border-radius: 12px;
  width: 130px;
  height: 80px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 12px;
`

const buttonFullStyle = cx(
  buttonStyle,
  css`
    background-color: transparent;
  `,
)

export const LanguageSelector: FC = () => {
  const [isOpen, setOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const onClose = () => setOpen(false)
  const onOpen = () => setOpen(true)
  const dispatch = useDispatch<AppDispatch>()

  const _onChange = (language: Language) => {
    i18n.changeLanguage(language)
    dispatch(configSlice.actions.updateConfig({ language }))
    onClose()
  }

  const language = i18n.language

  return (
    <Popover
      isOpen={isOpen}
      onClickOutside={onClose}
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
            <LanguageList value={language} onChange={_onChange} />
          </div>
        </ArrowContainer>
      )}
    >
      <button className={buttonFullStyle} onClick={onOpen} tabIndex={-1}>
        {t('Language')}:{' '}
        <b>{nameMapping[language as Language] ?? nameMapping['en']}</b>
      </button>
    </Popover>
  )
}
