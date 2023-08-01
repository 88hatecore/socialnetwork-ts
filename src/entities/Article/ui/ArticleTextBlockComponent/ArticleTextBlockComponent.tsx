import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./ArticleTextBlockComponent.module.scss";

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = ({
  className,
}: ArticleTextBlockComponentProps) => {
  const { t } = useTranslation("article");
  return (
    <div
      className={classNames(styles.ArticleTextBlockComponent, {}, [className])}
    >
      {t("Текстовый блок статьи")}
    </div>
  );
};
