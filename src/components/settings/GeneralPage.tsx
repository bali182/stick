import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../state/store'
import { PageProps } from './types'
import { useConfig } from '../../modelHooks'
import { configSlice } from '../../state/config'
import { Switch } from './Switch'
import { InputSection } from './InputSection'
import { useTranslation } from 'react-i18next'

export const GeneralPage: FC<PageProps> = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { showTooltips } = useConfig()
  const { t } = useTranslation()

  const onShowTooltipsChange = (tt: boolean) => {
    dispatch(configSlice.actions.updateConfig({ showTooltips: tt }))
  }

  return (
    <>
      <InputSection
        name={t('Settings.ShowTooltipsName')}
        description={t('Settings.ShowTooltipsDescription')}
        Editor={Switch}
        onChange={onShowTooltipsChange}
        value={showTooltips ?? true}
      />
    </>
  )
}
