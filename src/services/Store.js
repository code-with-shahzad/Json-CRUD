import { createStore , applyMiddleware, compose } from "redux";
import reducer from "./reducer/Index";
import { persistStore , persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const persistConfig ={
    key : 'root',
    storage
}
const persistRed = persistReducer(persistConfig, reducer)
const store = createStore( persistRed,compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__()))
export const persistor = persistStore(store)

export default store