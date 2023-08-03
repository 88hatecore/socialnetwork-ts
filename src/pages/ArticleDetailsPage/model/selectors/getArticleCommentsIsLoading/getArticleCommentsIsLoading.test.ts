import { StateSchema } from "app/providers/StoreProvider";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailsPage";

describe("getArticleCommentsIsLoading.test", () => {
  test("should return loading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsComments: {
        isLoading: true,
      },
    };
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleCommentsIsLoading(state as StateSchema)).toEqual(
      undefined,
    );
  });
});
