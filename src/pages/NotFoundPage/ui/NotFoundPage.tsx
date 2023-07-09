import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./NotFoundPage.module.scss";

interface INotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: INotFoundPageProps) => {
  const { t } = useTranslation("translation");

  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </div>
  );
};

export default NotFoundPage;
