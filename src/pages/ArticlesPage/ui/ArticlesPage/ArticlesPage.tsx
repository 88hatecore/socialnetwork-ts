import { useTranslation } from "react-i18next";
import { memo, useCallback } from "react";
import { useSelector } from "react-redux";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { classNames } from "shared/lib/classNames/classNames";
import { ArticleView } from "entities/Article/model/types/article";
import { ArticleList, ArticleViewSelector } from "../../../../entities/Article";
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice";
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList";
import { getArticlesPageIsLoading } from "../../model/selectors/getArticlesPageIsLoading/getArticlesPageIsLoading";
import { getArticlesPageView } from "../../model/selectors/getArticlesPageView/getArticlesPageView";
import { getArticlesPageError } from "../../model/selectors/getArticlesPageError/getArticlesPageError";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  const error = useSelector(getArticlesPageError);

  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view));
    },
    [dispatch],
  );

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.ArticlesPage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
