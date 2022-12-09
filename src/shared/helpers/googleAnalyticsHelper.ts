import { event, EventArgs, initialize, pageview } from 'react-ga';

import { CookieHelper } from './cookieHelper';

const cookieHelper: CookieHelper = new CookieHelper();

export class GoogleAnalyticsHelper {
  InitGA(id: string) {
    initialize(id);
  }

  // TODO: priskrolovani zavolat event pokud je dana sekce aktivni
  // TODO: Bude zde metoda, která bude načátat hodnoty z cookies a vratí hodnotu pro analztické cookie
  // TODO: https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
  SendEventToGA = (category: string, action: string, label: string = "") => {
    const value: string = cookieHelper.Get("CookieConsent");

    if (value === "true") {
      const args: EventArgs = {
        category: category,
        action: action,
        label: label,
      };

      event(args);
    }
  };

  SendPageViewToGA = () => {
    const value: string = cookieHelper.Get("CookieConsent");

    if (value === "true") {
      // TODO: ukládat do cookies hodnotu pro analztické cookie
      pageview(window.location.href);
    }
  };

  RemoveGA() {
    cookieHelper.Remove("_ga");
    cookieHelper.Remove("_gid");
    cookieHelper.Remove("_gat");
  }
}
