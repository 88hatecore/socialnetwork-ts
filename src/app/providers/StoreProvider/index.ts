import { StoreProvider } from "./ui/StoreProvider";
import { createReduxStore } from "./config/store";
import type {
  IReduxStoreWithManager,
  IStateSchema,
} from "./config/StateSchema";

export {
  StoreProvider,
  createReduxStore,
  IStateSchema,
  IReduxStoreWithManager,
};
