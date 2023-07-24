import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { getProfileData } from "../../../../entities/Profile/modal/selector/getProfileData/getProfileData";
import { getProfileIsLoading } from "../../../../entities/Profile/modal/selector/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "../../../../entities/Profile/modal/selector/getProfileError/getProfileError";
import styles from "./ProfileCard.module.scss";

interface IProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
  const { t } = useTranslation("profile");
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t("Профиль")} />
        <Button className={styles.editBtn} theme={ThemeButton.OUTLINE}>
          {t("Редактировать")}
        </Button>
      </div>
      <div className={styles.data}>
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={styles.input}
        />
        <Input
          value={data?.last}
          placeholder={t("Ваша фамилия")}
          className={styles.input}
        />
      </div>
    </div>
  );
};
