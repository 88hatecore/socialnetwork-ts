import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./ArticleImageBlockComponent.module.scss";

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = ({
  className,
}: ArticleImageBlockComponentProps) => {
  const { t } = useTranslation("article");
  return (
    <div
      className={classNames(styles.ArticleImageBlockComponent, {}, [className])}
    >
      {t("Блок изображений статей")}
    </div>
  );
};
