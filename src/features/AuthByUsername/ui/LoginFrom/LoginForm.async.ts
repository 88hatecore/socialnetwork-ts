import { FC, lazy } from "react";
import { ILoginFormProps } from "features/AuthByUsername/ui/LoginFrom/LoginForm";

export const LoginFormAsync = lazy<FC<ILoginFormProps>>(
  () => new Promise((resolve) => {
    setTimeout(() => resolve(import("./LoginForm")), 1500);
  }),
);
