import { createStore } from "redux";
import RootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
}

let reducers = persistReducer(persistConfig, RootReducer);
const reduxStore = createStore(
    reducers,
);
const Persistor: any = persistStore(reduxStore);

export { Persistor, reduxStore };
