import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { counterReducer } from "../../../../entities/Counter";
import { userReducer } from "../../../../entities/User";
import { createReducerManager } from "./reducerManager";
import { IStateSchema } from "./StateSchema";

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>,
) {
  const rootReducer: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    user: userReducer,
    counter: counterReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<IStateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];
