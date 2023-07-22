import { DeepPartial } from "@reduxjs/toolkit";
import { IStateSchema } from "app/providers/StoreProvider";
import { getLoginUsername } from "features/AuthByUsername/model/selector/getLoginUsername/getLoginUsername";

describe("getLoginUsername.test", () => {
  test("should return value", () => {
    const state: DeepPartial<IStateSchema> = {
      loginForm: {
        username: "user",
      },
    };
    expect(getLoginUsername(state as IStateSchema)).toEqual("user");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<IStateSchema> = {};
    expect(getLoginUsername(state as IStateSchema)).toEqual("");
  });
});
