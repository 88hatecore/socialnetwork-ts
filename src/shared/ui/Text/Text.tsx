import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  NORMAL = "primary",
  ERROR = "error",
}

interface ITextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
}

export const Text = (props: ITextProps) => {
  const {
    className, text, title, theme = TextTheme.NORMAL,
  } = props;

  return (
    <div
      className={classNames(styles.Text, { [styles[theme]]: true }, [
        className,
      ])}
    >
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
