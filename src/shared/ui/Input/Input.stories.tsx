import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Input } from "./Input";

export default {
  title: "shared/Input",
  component: Input,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: "Type text",
  value: "123123",
};

export const Dark = Template.bind({});
Dark.args = {
  placeholder: "Type text",
  value: "123123",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Black = Template.bind({});
Black.args = {
  placeholder: "Type text",
  value: "123123",
};
Black.decorators = [ThemeDecorator(Theme.BLACK)];
