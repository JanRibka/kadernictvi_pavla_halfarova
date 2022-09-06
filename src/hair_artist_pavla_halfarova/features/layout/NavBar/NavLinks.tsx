import { useTranslation } from 'react-i18next';

const NavLinks = () => {
  const { t } = useTranslation(["layout\\mainMenu"]);

  return (
    <ul>
      <li>
        <a href='#'>{t("intro")}</a>
        <a href='#'>{t("services")}</a>
        <a href='#'>{t("gallery")}</a>
        <a href='#'>{t("contact")}</a>
      </li>
    </ul>
  );
};

export default NavLinks;
