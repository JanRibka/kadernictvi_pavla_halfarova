import { event, EventArgs, initialize, pageview } from 'react-ga';
import CookieConstentModel from 'shared/components/cookieConsent/CookieConsentModel';

import { CookieHelper } from './cookieHelper';

const cookieHelper: CookieHelper = new CookieHelper();

export class GoogleAnalyticsHelper {
  InitGA(id: string) {
    initialize(id);
  }

  // TODO: priskrolovani zavolat event pokud je dana sekce aktivni
  // TODO: https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
  SendEventToGA = (category: string, action: string, label: string = "") => {
    const consent: CookieConstentModel = GetCookieConsentCookieValue();

    if (consent.diag === true) {
      const args: EventArgs = {
        category: category,
        action: action,
        label: label,
      };

      event(args);
    }
  };

  SendPageViewToGA = () => {
    const consent: CookieConstentModel = GetCookieConsentCookieValue();

    if (consent.diag === true) {
      pageview(window.location.href);
    }
  };

  RemoveGA() {
    cookieHelper.Remove("_ga");
    cookieHelper.Remove("_gid");
    cookieHelper.Remove("_gat");
  }
}

export const GetCookieConsentCookieValue = () => {
  const cookieHelper: CookieHelper = new CookieHelper();
  const value: string = cookieHelper.Get("CookieConsent");
  let result: CookieConstentModel = { funct: true, diag: false };

  if (value !== "") {
    result = JSON.parse(value);
  }

  return result;
};
