import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";

import "@/styles/globals.css";
import { PersistGate } from "redux-persist/integration/react";

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
