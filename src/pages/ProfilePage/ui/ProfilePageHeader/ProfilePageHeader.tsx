import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from "../../../../entities/Profile";
import styles from "./ProfilePageHeader.module.scss";

interface IProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = ({ className }: IProfilePageHeaderProps) => {
  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
      <Text title={t("Профиль")} />
      {readonly ? (
        <Button
          className={styles.editBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onEdit}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            className={styles.editBtn}
            theme={ThemeButton.OUTLINE_RED}
            onClick={onCancelEdit}
          >
            {t("Отменить")}
          </Button>
          <Button
            className={styles.saveBtn}
            theme={ThemeButton.OUTLINE}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
        </>
      )}
    </div>
  );
};
