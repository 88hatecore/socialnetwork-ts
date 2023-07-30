import { Profile, ValidateProfileError } from "../../types/profile";

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const {
    username, first, last, age, country, city, avatar,
  } = profile;
  const errors: ValidateProfileError[] = [];

  if (!first || !last) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if (!username) {
    errors.push(ValidateProfileError.INCORRECT_USERNAME);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY);
  }

  if (!avatar) {
    errors.push(ValidateProfileError.INCORRECT_AVATAR);
  }

  return errors;
};
