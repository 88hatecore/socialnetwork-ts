import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit";
import { ICounterSchema } from "entities/Counter";
import { IUserSchema } from "entities/User";
import { ILoginSchema } from "features/AuthByUsername";
import { IProfileSchema } from "entities/Profile";
import { AxiosInstance } from "axios";
import { To } from "@remix-run/router";
import { NavigateOptions } from "react-router/dist/lib/context";

export interface IStateSchema {
  counter: ICounterSchema;
  user: IUserSchema;

  // Асинхронные редюсеры
  loginForm?: ILoginSchema;
  profile?: IProfileSchema;
}

export type StateSchemaKey = keyof IStateSchema;

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>;
  reduce: (
    state: IStateSchema,
    action: AnyAction
  ) => CombinedState<IStateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
}
