import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { IStateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { DeepPartial } from "@reduxjs/toolkit";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState } = props;

  const store = createReduxStore(initialState as IStateSchema);

  return <Provider store={store}>{children}</Provider>;
};
