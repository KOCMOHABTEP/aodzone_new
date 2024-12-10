import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  userConfig: {
    sidebarCollapsed: boolean;
  };
}

const initialState: IAppState = {
  userConfig: {
    sidebarCollapsed: false,
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    sidebarCollapseToggle: (state, action: PayloadAction<boolean>) => {
      state.userConfig.sidebarCollapsed = action.payload;
    },
  },
});

export const { sidebarCollapseToggle } = appSlice.actions;

export default appSlice.reducer;
