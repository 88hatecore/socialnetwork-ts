import { StateSchema } from "app/providers/StoreProvider";
import { ValidateProfileError } from "entities/Profile";
import { getProfileValidateErrors } from "./getProfileValidateErrors";

describe("getProfileValidateErrors.test", () => {
  test("should work with readonly", () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [
          ValidateProfileError.INCORRECT_USER_DATA,
          ValidateProfileError.INCORRECT_USERNAME,
          ValidateProfileError.INCORRECT_COUNTRY,
          ValidateProfileError.INCORRECT_CITY,
          ValidateProfileError.INCORRECT_AGE,
          ValidateProfileError.SERVER_ERROR,
          ValidateProfileError.NO_DATA,
        ],
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CITY,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.NO_DATA,
    ]);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
