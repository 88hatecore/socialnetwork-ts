import { memo } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import styles from "./Text.module.scss";

export enum TextTheme {
  NORMAL = "primary",
  ERROR = "error",
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export enum TextSize {
  S = "size_s",
  M = "size_m",
  L = "size_l",
}

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    theme = TextTheme.NORMAL,
    align = TextAlign.LEFT,
    size = TextSize.M,
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles[align]]: true,
    [styles[size]]: true,
  };

  return (
    <div className={classNames(styles.Text, mods, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
});
