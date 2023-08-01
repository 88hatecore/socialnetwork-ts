import { ComponentMeta, ComponentStory } from "@storybook/react";
import ArticleDetailPage from "./ArticleDetailPage";

export default {
  title: "pages/ArticleDetailPage",
  component: ArticleDetailPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailPage>;

const Template: ComponentStory<typeof ArticleDetailPage> = (args) => (
  <ArticleDetailPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
