import { useTranslation } from "react-i18next";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { memo } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useSelector } from "react-redux";
import { getUserAuthData } from "../../../../entities/User";
import { ISidebarItemType } from "../../model/Items";
import styles from "./SidebarItem.module.scss";

interface ISidebarItemProps {
  item: ISidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      to={item.path}
      theme={AppLinkTheme.SECONDARY}
      className={classNames(styles.item, { [styles.collapsed]: collapsed })}
    >
      <item.Icon className={styles.icon} />
      <span className={styles.link}>{t(item.text)}</span>
    </AppLink>
  );
});
