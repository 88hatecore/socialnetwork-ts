import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localstorage";
import axios from "axios";
import { IUser, userActions } from "../../../../../entities/User/index";

interface ILoginByUsername {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  IUser,
  ILoginByUsername,
  { rejectValue: string }
>("login/loginByUsername", async (authData, thunkAPI) => {
  try {
    const response = await axios.post<IUser>(
      "http://localhost:8080/login",
      authData,
    );
    if (!response.data) {
      throw new Error();
    }

    // ошибка storybook
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
    thunkAPI.dispatch(userActions.setAuthData(response.data));

    return response.data;
  } catch (e) {
    console.log(e);
    return thunkAPI.rejectWithValue("error"); // ошибка сторибука при i18n!!! i18n.t("Неверный логин или пароль")
  }
});
