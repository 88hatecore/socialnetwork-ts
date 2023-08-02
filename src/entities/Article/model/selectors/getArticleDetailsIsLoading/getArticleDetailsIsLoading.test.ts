import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsIsLoading } from "entities/Article";

describe("getArticleDetailsIsLoading.test", () => {
  test("should return loading", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(true);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsIsLoading(state as StateSchema)).toEqual(false);
  });
});
