import { classNames } from "shared/lib/classNames/classNames";
import { CSSProperties, useMemo } from "react";
import styles from "./Avatar.module.scss";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = ({
  className, src, size, alt,
}: AvatarProps) => {
  const sizes = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      alt={alt}
      src={src}
      style={sizes}
      className={classNames(styles.Avatar, {}, [className])}
    />
  );
};
