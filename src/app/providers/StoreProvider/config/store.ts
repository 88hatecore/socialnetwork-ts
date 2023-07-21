import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthByUsername";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { IStateSchema } from "./StateSchema";

export function createReduxStore(initialState?: IStateSchema) {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<IStateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
