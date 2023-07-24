import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { IProfile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<
  IProfile,
  void,
  ThunkConfig<string>
>("profile/fetchProfileData", async (_, thunkAPI) => {
  const { extra, dispatch, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<IProfile>("/profile");

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue("error"); // ошибка сторибука при i18n!!! i18n.t("Неверный логин или пароль")
  }
});
