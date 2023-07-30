import { StoreProvider } from "./ui/StoreProvider";
import { AppDispatch, createReduxStore } from "./config/store";
import type {
  IReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  AppDispatch,
  StateSchema,
  ThunkConfig,
  IReduxStoreWithManager,
};
