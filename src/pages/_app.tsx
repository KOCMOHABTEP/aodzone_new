import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";

import "@/styles/global.scss";
import "@/styles/variables.scss";

import { PersistGate } from "redux-persist/integration/react";
import StoreService from "@/redux/store.service";

StoreService.setStoreReference(store);

function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    );
}

export default App;
