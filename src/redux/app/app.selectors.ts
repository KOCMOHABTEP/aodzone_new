import { RootState } from '@/redux/store';

export const getSidebarCollapsed = (state: RootState) =>
  state.app.userConfig.sidebarCollapsed;
