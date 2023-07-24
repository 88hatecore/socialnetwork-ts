import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  IReduxStoreWithManager,
  IStateSchema,
  ThunkConfig,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  IStateSchema,
  ThunkConfig,
  IReduxStoreWithManager,
};
