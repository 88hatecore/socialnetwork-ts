import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { To } from "@remix-run/router";
import { NavigateOptions } from "react-router/dist/lib/context";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";
import { IStateSchema } from "./StateSchema";

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
) {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api: $api,
          navigate,
        },
      },
    }),
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
