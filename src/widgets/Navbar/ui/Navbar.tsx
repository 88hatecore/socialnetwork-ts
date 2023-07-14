import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";

interface INavbarProps {
  className?: string;
}

export const Navbar = ({ className }: INavbarProps) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}/>
    </div>
  );
};
