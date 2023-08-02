import { memo, useCallback, useEffect } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useSelector } from "react-redux";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Icon } from "shared/ui/Icon/Icon";
import { Avatar } from "shared/ui/Avatar/Avatar";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import CalendarIcon from "shared/assets/icons/calendar-20-20.svg";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../../../entities/Article";
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById";
import { ArticleBlock, ArticleBlockType } from "../../model/types/article";
import styles from "./ArticleDetails.module.scss";

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation("article");
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={styles.title} width={669} height={31} />
        <Skeleton className={styles.skeleton} width="100%" height={31} />
        <Skeleton className={styles.skeleton} width="100%" height={231} />
        <Skeleton className={styles.skeleton} width="100%" height={231} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("Произошла ошибка при загрузке статьи")}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} className={styles.logo} />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.logo} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
