import { Country } from "entities/Country";
import { Currency } from "entities/Currency";
import { ValidateProfileError } from "entities/Profile";
import { validateProfileData } from "./validateProfileData";

const data = {
  first: "Ilya",
  last: "Dolgov",
  username: "admin",
  age: 25,
  country: Country.Russia,
  city: "Moscow",
  currency: Currency.RUB,
};

describe("validateProfileData.test", () => {
  test("success", async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test("with out first and last name", async () => {
    const result = validateProfileData({
      ...data,
      first: "",
      last: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test("with out username", async () => {
    const result = validateProfileData({
      ...data,
      username: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USERNAME]);
  });

  test("incorrect age", async () => {
    const result = validateProfileData({
      ...data,
      age: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test("incorrect country", async () => {
    const result = validateProfileData({
      ...data,
      country: undefined,
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test("incorrect city", async () => {
    const result = validateProfileData({
      ...data,
      city: "",
    });

    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY]);
  });

  test("incorrect all", async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_USERNAME,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
      ValidateProfileError.INCORRECT_CITY,
    ]);
  });
});
