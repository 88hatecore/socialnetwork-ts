import { memo, useCallback } from "react";
import { Input } from "shared/ui/Input/Input";
import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useSelector } from "react-redux";

import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "../../model/slices/addCommentFormSlice";
import styles from "./AddCommentForm.module.scss";
import { getAddCommentFormText } from "../../model/selectors/getAddCommentFormText/getAddCommentFormText";
import { getAddCommentFormError } from "../../model/selectors/getAddCommentFormError/getAddCommentFormError";

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

const addCommentForm = memo((props: AddCommentFormProps) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setTest(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    onSendComment(text || "");
    onCommentTextChange("");
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(styles.addCommentForm, {}, [className])}>
        <Input
          placeholder={t("Введите текст комментария")}
          value={text}
          onChange={onCommentTextChange}
          className={styles.input}
        />
        <Button theme={ThemeButton.OUTLINE} onClick={onSendHandler}>
          {t("Отправить")}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
export default addCommentForm;
