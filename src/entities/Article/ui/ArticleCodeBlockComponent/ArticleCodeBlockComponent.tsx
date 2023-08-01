import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./ArticleCodeBlockComponent.module.scss";

interface ArticleCodeBlockComponentProps {
  className?: string;
}

export const ArticleCodeBlockComponent = ({
  className,
}: ArticleCodeBlockComponentProps) => {
  const { t } = useTranslation("article");
  return (
    <div
      className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}
    >
      {t("Кодовый блок статьи")}
    </div>
  );
};
