import { StateSchema } from "app/providers/StoreProvider";
import { getAddCommentFormText } from "./getAddCommentFormText";

describe("getAddCommentFormText.test", () => {
  test("should return error", () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: "123",
      },
    };
    expect(getAddCommentFormText(state as StateSchema)).toEqual("123");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getAddCommentFormText(state as StateSchema)).toEqual(undefined);
  });
});
