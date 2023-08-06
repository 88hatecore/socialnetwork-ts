import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { CommentCard } from "./CommentCard";

export default {
  title: "entities/Comment/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => (
  <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
};

export const Dark = Template.bind({});
Dark.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Black = Template.bind({});
Black.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
};
Black.decorators = [ThemeDecorator(Theme.BLACK)];

export const Loading = Template.bind({});
Loading.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];

export const LoadingBlack = Template.bind({});
LoadingBlack.args = {
  comment: {
    id: "1",
    text: "hello world",
    user: {
      id: "1",
      username: "hate",
    },
  },
  isLoading: true,
};
LoadingBlack.decorators = [ThemeDecorator(Theme.BLACK)];
