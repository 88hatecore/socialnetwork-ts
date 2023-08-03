import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsError } from "pages/ArticleDetailsPage";

describe("getArticleCommentsError.test", () => {
  test("should return data", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        error: "error",
      },
    };
    expect(getArticleCommentsError(state as StateSchema)).toEqual("error");
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsError(state as StateSchema)).toEqual(undefined);
  });
});
