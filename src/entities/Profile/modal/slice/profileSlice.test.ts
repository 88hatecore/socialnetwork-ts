import {
  IProfileSchema,
  profileActions,
  profileReducer,
  updateProfileData,
  ValidateProfileError,
} from "entities/Profile";
import { Country } from "entities/Country";
import { Currency } from "entities/Currency";

const data = {
  first: "Ilya",
  last: "Dolgov",
  username: "admin",
  age: 25,
  country: Country.Russia,
  city: "Moscow",
  currency: Currency.RUB,
};

describe("profileSlice.test", () => {
  test("test set readonly", () => {
    const state: DeepPartial<IProfileSchema> = { readonly: false };
    expect(
      profileReducer(state as IProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test("test cancel edit", () => {
    const state: DeepPartial<IProfileSchema> = {
      data,
      form: { username: "" },
    };
    expect(
      profileReducer(state as IProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test("test update profile", () => {
    const state: DeepPartial<IProfileSchema> = {
      form: { username: "admin" },
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        profileActions.updateProfile({
          username: "notadmin",
        }),
      ),
    ).toEqual({
      form: { username: "notadmin" },
    });
  });

  test("test update profile service pending", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as IProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test("test update profile service fullfiled", () => {
    const state: DeepPartial<IProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as IProfileSchema,
        updateProfileData.fulfilled(data, ""),
      ),
    ).toEqual({
      isLoading: false,
      validateError: undefined,
      validateErrors: undefined,
      readonly: true,
      form: data,
      data,
    });
  });
});
