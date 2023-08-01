import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { memo } from "react";
import styles from "./ArticleDetailPage.module.scss";

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation("article");
  return (
    <div className={classNames(styles.ArticleDetailPage, {}, [className])}>
      {t("Детальная страница статьи")}
    </div>
  );
};

export default memo(ArticleDetailPage);
