import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Text, TextTheme } from "./Text";

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: "Test title",
  text: "Test description",
};

export const NormalDark = Template.bind({});
NormalDark.args = {
  title: "Test title",
  text: "Test description",
};
NormalDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: "Test title",
  text: "Test description",
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: "Test title",
  text: "Test description",
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: "Test title",
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: "Test title",
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleError = Template.bind({});
OnlyTitleError.args = {
  title: "Test title",
  theme: TextTheme.ERROR,
};

export const OnlyTitleErrorDark = Template.bind({});
OnlyTitleErrorDark.args = {
  title: "Test title",
  theme: TextTheme.ERROR,
};
OnlyTitleErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: "Test description",
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: "Test description",
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextError = Template.bind({});
OnlyTextError.args = {
  text: "Test description",
  theme: TextTheme.ERROR,
};

export const OnlyTextErrorDark = Template.bind({});
OnlyTextErrorDark.args = {
  text: "Test description",
  theme: TextTheme.ERROR,
};
OnlyTextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
