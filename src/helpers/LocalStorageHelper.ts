interface LocalStorageState {
    userConfig: {
        sidebarCollapsed: boolean;
    };
}

type LocalStorageStateKeys = keyof LocalStorageState;

export default class LocalStorageHelper {
    static loadState(): LocalStorageState {
        if (typeof window !== "undefined") {
            try {
                const serializedState = localStorage.getItem("appState");

                if (serializedState === null) {
                    return this.initializeState();
                }

                return JSON.parse(serializedState);
            } catch (err) {
                return this.initializeState();
            }
        }

        return null;
    }

    static saveState(state) {
        if (typeof window !== "undefined") {
            try {
                const serializedState = JSON.stringify(state);
                localStorage.setItem("appState", serializedState);
            } catch (err) {}
        }

        return null;
    }

    static initializeState(): LocalStorageState {
        if (typeof window !== "undefined") {
            const initialState: LocalStorageState = {
                userConfig: {
                    sidebarCollapsed: false,
                },
            };
            localStorage.setItem("appState", JSON.stringify(initialState));

            return initialState;
        }

        return null;
    }

    static editStorageKey(
        key: LocalStorageStateKeys,
        value: LocalStorageState[LocalStorageStateKeys]
    ): LocalStorageState {
        if (typeof window !== "undefined") {
            try {
                const serializedState = localStorage.getItem("appState");
                const parsedState: LocalStorageState =
                    JSON.parse(serializedState);
                const editedState = {
                    ...parsedState,
                    [key]: {
                        ...parsedState[key],
                        ...value,
                    },
                };

                this.saveState(editedState);

                return editedState;
            } catch (err) {
                return this.initializeState();
            }
        }

        return null;
    }

    static getStorageKey(
        key: LocalStorageStateKeys
    ): LocalStorageState[LocalStorageStateKeys] {
        if (typeof window !== "undefined") {
            try {
                const serializedState = localStorage.getItem("appState");
                const parsedState = JSON.parse(serializedState);

                this.saveState(parsedState);

                return parsedState[key];
            } catch (err) {
                return null;
            }
        }

        return null;
    }
}
