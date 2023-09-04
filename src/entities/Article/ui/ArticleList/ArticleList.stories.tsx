import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { ArticleList } from "./ArticleList";
import { Article, ArticleView } from "../../model/types/article";

export default {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

const article = {
  id: "1",
  title: "Javascript news",
  subtitle: "Что нового в JS за 2023 год",
  img: "https://teknotower.com/wp-content/uploads/2020/11/js.png",
  views: 1022,
  createdAt: "26.02.2023",
  user: {
    id: "1",
    username: "admin",
    avatar: "https://avatars.githubusercontent.com/u/120119796?v=4",
  },
  type: ["IT"],
  blocks: [
    {
      id: "1",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "4",
      type: "CODE",
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: "5",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "2",
      type: "IMAGE",
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
    {
      id: "3",
      type: "CODE",
      code: "const path = require('path');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);",
    },
    {
      id: "7",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
        "Существуют и другие способы запуска JS-кода в браузере. Так, если говорить об обычном использовании программ на JavaScript, они загружаются в браузер для обеспечения работы веб-страниц. Как правило, код оформляют в виде отдельных файлов с расширением .js, которые подключают к веб-страницам, но программный код можно включать и непосредственно в код страницы. Всё это делается с помощью тега <script>. Когда браузер обнаруживает такой код, он выполняет его. Подробности о теге script можно посмотреть на сайте w3school.com. В частности, рассмотрим пример, демонстрирующий работу с веб-страницей средствами JavaScript, приведённый на этом ресурсе. Этот пример можно запустить и средствами данного ресурса (ищите кнопку Try it Yourself), но мы поступим немного иначе. А именно, создадим в каком-нибудь текстовом редакторе (например — в VS Code или в Notepad++) новый файл, который назовём hello.html, и добавим в него следующий код:",
      ],
    },
    {
      id: "8",
      type: "IMAGE",
      src: "https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png",
      title: "Рисунок 1 - скриншот сайта",
    },
    {
      id: "9",
      type: "TEXT",
      title: "Заголовок этого блока",
      paragraphs: [
        "JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.",
      ],
    },
  ],
} as Article;

export const isLoadingList = Template.bind({});
isLoadingList.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};

export const isLoadingListDark = Template.bind({});
isLoadingListDark.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};
isLoadingListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoadingListBlack = Template.bind({});
isLoadingListBlack.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};
isLoadingListBlack.decorators = [ThemeDecorator(Theme.BLACK)];

export const isLoadingPlate = Template.bind({});
isLoadingPlate.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.PLATE,
};

export const isLoadingPlateDark = Template.bind({});
isLoadingPlateDark.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.PLATE,
};
isLoadingPlateDark.decorators = [ThemeDecorator(Theme.DARK)];

export const isLoadingPlateBlack = Template.bind({});
isLoadingPlateBlack.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.PLATE,
};
isLoadingPlateBlack.decorators = [ThemeDecorator(Theme.BLACK)];

export const Plate = Template.bind({});
Plate.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.PLATE,
};

export const PlateDark = Template.bind({});
PlateDark.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.PLATE,
};
PlateDark.decorators = [ThemeDecorator(Theme.DARK)];

export const PlateBlack = Template.bind({});
PlateBlack.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.PLATE,
};
PlateBlack.decorators = [ThemeDecorator(Theme.BLACK)];

export const List = Template.bind({});
List.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.LIST,
};

export const ListDark = Template.bind({});
ListDark.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.LIST,
};
ListDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ListBlack = Template.bind({});
ListBlack.args = {
  articles: new Array(9).fill(0).map((item, index) => ({
    ...article,
    id: String(index),
  })),
  isLoading: false,
  view: ArticleView.LIST,
};
ListBlack.decorators = [ThemeDecorator(Theme.BLACK)];
