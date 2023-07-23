import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  IReduxStoreWithManager,
  IStateSchema,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  IStateSchema,
  IReduxStoreWithManager,
};
