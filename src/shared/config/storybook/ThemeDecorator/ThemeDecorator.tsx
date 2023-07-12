import { Story } from "@storybook/react";
import { Theme } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoreComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoreComponent />
  </div>
);
