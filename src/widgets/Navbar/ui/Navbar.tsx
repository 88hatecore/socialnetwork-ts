import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import styles from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={styles.mainLink}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t("О Сайте")}
        </AppLink>
      </div>
    </div>
  );
};
