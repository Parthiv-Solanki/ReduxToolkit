import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userSlice from "./reducer/userSlice";
import todoSlice from "./reducer/todoSlice";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["todoList", "users"],
};
const rootReducer = combineReducers({
  todo: todoSlice,
  users: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger, thunk),
});

const persistore = persistStore(store);

export { store, persistore };
