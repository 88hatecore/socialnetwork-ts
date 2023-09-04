import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import { ArticleList } from "../../../../entities/Article";
import { ArticleView } from "../../../../entities/Article/model/types/article";
import styles from "./ArticlesPage.module.scss";

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      <ArticleList isLoading view={ArticleView.LIST} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
