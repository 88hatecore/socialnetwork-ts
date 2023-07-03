import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("about");

  return (
    <div>
      {t("Новый перевод")}
      {t("Главная страница")}
    </div>
  );
};

export default MainPage;
