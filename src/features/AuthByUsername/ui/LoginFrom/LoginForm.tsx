import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useSelector } from "react-redux";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { getLoginUsername } from "../../model/selector/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "../../model/selector/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "../../model/selector/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "../../model/selector/getLoginError/getLoginError";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";

export interface ILoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: ILoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(
      loginByUsername({
        username,
        password,
      }),
    );
    if (result.meta.requestStatus === "fulfilled") {
      onSuccess();
    }
  }, [dispatch, username, password, onSuccess]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.LoginForm, {}, [className])}>
        <Text title={t("Форма авторизации")} />
        {error && (
          <Text text={t("Неверный логин или пароль")} theme={TextTheme.ERROR} />
        )}
        <Input
          autofocus
          placeholder={t("Введите логин")}
          type="text"
          className={styles.input}
          onChange={onChangeUsername}
          value={username}
        />
        <Input
          placeholder={t("Введите пароль")}
          type="text"
          className={styles.input}
          onChange={onChangePassword}
          value={password}
        />
        <Button
          className={styles.loginBtn}
          theme={ThemeButton.OUTLINE}
          onClick={onLoginClick}
          disabled={isLoading}
        >
          {t("Войти")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
