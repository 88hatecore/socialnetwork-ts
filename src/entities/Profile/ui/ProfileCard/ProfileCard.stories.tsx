import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import avatar from "shared/assets/tests/storybook.jpg";
import { ProfileCard } from "./ProfileCard";
import { Country } from "../../../Country";
import { Currency } from "../../../Currency";

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => (
  <ProfileCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  data: {
    first: "Ilya",
    last: "Dolgov",
    username: "admin",
    age: 25,
    country: Country.Russia,
    city: "Moscow",
    currency: Currency.RUB,
    avatar,
  },
};

export const Dark = Template.bind({});
Dark.args = {
  data: {
    first: "Ilya",
    last: "Dolgov",
    username: "admin",
    age: 25,
    country: Country.Russia,
    city: "Moscow",
    currency: Currency.RUB,
    avatar,
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const withError = Template.bind({});
withError.args = {
  error: "true",
};

export const withErrorDark = Template.bind({});
withErrorDark.args = {
  error: "true",
};
withErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
};

export const LoadingDark = Template.bind({});
LoadingDark.args = {
  isLoading: true,
};
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)];
