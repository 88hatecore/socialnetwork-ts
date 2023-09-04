import { StateSchema } from "app/providers/StoreProvider";
import { ArticleView } from "../../../../../entities/Article/model/types/article";

export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.PLATE;
