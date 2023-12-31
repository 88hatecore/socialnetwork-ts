import { ButtonHTMLAttributes, memo, ReactNode } from "react";
import { classNames, Mods } from "../../lib/classNames/classNames";
import styles from "./Button.module.scss";

export enum ThemeButton {
  CLEAR = "clear",
  CLEAR_INVERTED = "clearInverted",
  OUTLINE = "outline",
  OUTLINE_RED = "outlineRed",
  BACKGROUND = "background",
  BACKGROUND_INVERTED = "backgroundInverted",
}

export enum SizeButton {
  M = "size_m",
  L = "size_l",
  XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: SizeButton;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    theme = ThemeButton.OUTLINE,
    square,
    disabled,
    size = SizeButton.M,
    ...otherProps
  } = props;

  const mods: Mods = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };

  return (
    <button
      type="button"
      className={classNames(styles.Button, mods, [className, styles[theme]])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
});
