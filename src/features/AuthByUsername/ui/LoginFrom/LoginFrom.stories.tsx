import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import LoginForm from "./LoginForm";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
    },
  }),
];

export const Black = Template.bind({});
Black.args = {};
Black.decorators = [
  ThemeDecorator(Theme.BLACK),
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
    },
  }),
];

export const withError = Template.bind({});
withError.args = {};
withError.decorators = [
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
      error: "ERROR",
    },
  }),
];

export const withErrorDark = Template.bind({});
withErrorDark.args = {};
withErrorDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
      error: "ERROR",
    },
  }),
];

export const withErrorBlack = Template.bind({});
withErrorBlack.args = {};
withErrorBlack.decorators = [
  ThemeDecorator(Theme.BLACK),
  StoreDecorator({
    loginForm: {
      username: "123",
      password: "asd",
      error: "ERROR",
    },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];

export const LoadingBlack = Template.bind({});
LoadingBlack.args = {};
LoadingBlack.decorators = [
  ThemeDecorator(Theme.BLACK),
  StoreDecorator({
    loginForm: {
      isLoading: true,
    },
  }),
];
