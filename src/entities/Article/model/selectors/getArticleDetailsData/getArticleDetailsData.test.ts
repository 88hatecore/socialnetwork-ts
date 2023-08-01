import { StateSchema } from "app/providers/StoreProvider";
import { getArticleDetailsData } from "entities/Article";

describe("getArticleDetailsData.test", () => {
  test("should return data", () => {
    const data = {
      id: "1",
      title: "Title",
      subtitle: "SubTitle",
      img: "img",
      views: 1,
      createdAt: "1.08.2023",
      type: [],
      blocks: [],
    };
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });
  test("should work with empty state", () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
