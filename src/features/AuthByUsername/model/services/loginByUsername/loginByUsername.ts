import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import { ThunkConfig } from "app/providers/StoreProvider/config/StateSchema";
import { IUser, userActions } from "../../../../../entities/User/index";

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsername,
  ThunkConfig<string>
>("login/loginByUsername", async (authData, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.post<IUser>("/login", authData);

    if (!response.data) {
      throw new Error();
    }

    // ошибка storybook
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error"); // ошибка сторибука при i18n!!! i18n.t("Неверный логин или пароль")
  }
});
