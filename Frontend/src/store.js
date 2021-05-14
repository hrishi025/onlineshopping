import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { persistStore } from "redux-persist";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export const persistor = persistStore(store);

export default { store, persistor };
