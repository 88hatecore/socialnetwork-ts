import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select } from "shared/ui/Select/Select";

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: "Укажите значение",
  options: [
    {
      value: "1",
      content: "Первый пункт",
    },
    {
      value: "2",
      content: "Второй пункт",
    },
  ],
};
