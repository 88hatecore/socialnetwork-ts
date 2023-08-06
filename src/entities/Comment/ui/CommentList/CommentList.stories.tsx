import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CommentList } from "./CommentList";

export default {
  title: "entities/Comment/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => (
  <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comments: [
    {
      id: "1",
      text: "hello world",
      user: {
        id: "1",
        username: "hate",
      },
    },
    {
      id: "2",
      text: "hello hell",
      user: {
        id: "2",
        username: "core",
      },
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  comments: [
    {
      id: "1",
      text: "hello world",
      user: {
        id: "1",
        username: "hate",
      },
    },
    {
      id: "2",
      text: "hello hell",
      user: {
        id: "2",
        username: "core",
      },
    },
  ],
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Black = Template.bind({});
Black.args = {
  comments: [
    {
      id: "1",
      text: "hello world",
      user: {
        id: "1",
        username: "hate",
      },
    },
    {
      id: "2",
      text: "hello hell",
      user: {
        id: "2",
        username: "core",
      },
    },
  ],
};
Black.decorators = [ThemeDecorator(Theme.BLACK)];

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  comments: [],
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBlack = Template.bind({});
LoadingBlack.args = {
  comments: [],
  isLoading: true,
};
LoadingBlack.decorators = [ThemeDecorator(Theme.BLACK)];
