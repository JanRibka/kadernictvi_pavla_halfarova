import i18next from 'i18next';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LocalesEnum } from 'shared/enums/LocalesEnum';

import SeoFb from './img/seo_fb.jpg';

const Seo = () => {
  // Consts
  const { t } = useTranslation(["\\head\\head"]);

  // Other
  useEffect(() => {
    SetSeoAfterLanguageChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18next.language]);

  const SetSeoAfterLanguageChange = () => {
    // Language
    document.documentElement.lang = i18next.language;

    // Změna document title
    document.title = t("title");

    // Description
    const desc = document.querySelector("meta[name='description']");
    desc?.setAttribute("content", t("description"));

    // Open graph
    const ogTitle = document.querySelector("meta[property='og:title']");
    ogTitle?.setAttribute("content", t("title"));
    const ogDesc = document.querySelector("meta[property='og:description']");
    ogDesc?.setAttribute("content", t("description"));
    const ogLocale = document.querySelector("meta[property='og:locale']");
    ogLocale?.setAttribute("content", LocalesEnum[i18next.language]);
    const seoFb = SeoFb;
    const ogImage = document.querySelector("meta[property='og:image']");
    ogImage?.setAttribute("content", seoFb);
    const ogImageUrl = document.querySelector(
      "meta[property='og:image:secure_url']"
    );
    ogImageUrl?.setAttribute("content", seoFb);
  };

  return <></>;
};

export default Seo;
