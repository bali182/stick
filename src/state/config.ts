import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ActiveTabState = 'EDITOR' | 'SHEET_MUSIC'

export type ConfigState = {
  activeTab: ActiveTabState
}

export type UpdateConfigPayload = Partial<ConfigState>

const initialState: ConfigState = {
  activeTab: 'EDITOR',
}

const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    updateConfig: (state, { payload }: PayloadAction<UpdateConfigPayload>) => ({
      ...state,
      ...payload,
    }),
  },
  selectors: {
    getActiveTab: (state): ActiveTabState => state.activeTab,
  },
})

export const { updateConfig } = configSlice.actions
export const { reducer: configReducer } = configSlice
export const { getActiveTab } = configSlice.selectors
