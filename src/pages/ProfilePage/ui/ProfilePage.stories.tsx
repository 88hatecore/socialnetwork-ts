import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";
import avatar from "shared/assets/tests/storybook.jpg";
import ProfilePage from "./ProfilePage";
import { Country } from "../../../entities/Country";
import { Currency } from "../../../entities/Currency";

export default {
  title: "pages/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    profile: {
      form: {
        first: "Ilya",
        last: "Dolgov",
        username: "admin",
        age: 25,
        country: Country.Russia,
        city: "Moscow",
        currency: Currency.RUB,
        avatar,
      },
    },
  }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        first: "Ilya",
        last: "Dolgov",
        username: "admin",
        age: 25,
        country: Country.Russia,
        city: "Moscow",
        currency: Currency.RUB,
        avatar,
      },
    },
  }),
];
