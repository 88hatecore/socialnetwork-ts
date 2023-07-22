import { ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { IStateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";

interface IStoreProviderProps {
  children: ReactNode;
  initialState?: DeepPartial<IStateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

export const StoreProvider = (props: IStoreProviderProps) => {
  const { children, initialState, asyncReducers } = props;

  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>,
  );

  return <Provider store={store}>{children}</Provider>;
};
