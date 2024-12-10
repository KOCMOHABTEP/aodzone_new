import { AnyAction } from 'redux';
import { RootStore } from './store';

let store: RootStore;

const setStoreReference = (storeRef: RootStore) => {
  store = storeRef;
};

const getState = () => store.getState();

const dispatch = (action: AnyAction) => {
  store.dispatch(action);
};

export default {
  setStoreReference,
  getState,
  dispatch,
};
