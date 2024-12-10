import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { persistor, store } from '@/redux/store';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/libs/index.scss';
import '@/styles/vars.scss';
import '@/styles/fonts.scss';
import '@/styles/global.scss';

import { PersistGate } from 'redux-persist/integration/react';
import StoreService from '@/redux/store.service';
import { ToastContainer } from 'react-toastify';
import { Icon } from '@/components/ui/Icon';

StoreService.setStoreReference(store);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          pauseOnHover={false}
          toastClassName="toastClassName"
          closeButton={() => (
            <div className="Toastify__toast-icon">
              <Icon name="xmark" size={20} />
            </div>
          )}
        />
      </PersistGate>
    </Provider>
  );
}

export default App;
