import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => (
  <div className={classNames(styles.Navbar, {}, [className])}>
    <div className={styles.links}>
      <AppLink
        to="/"
        theme={AppLinkTheme.SECONDARY}
        className={styles.mainLink}
      >
        Главная
      </AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
        О Сайте
      </AppLink>
    </div>
  </div>
);
