import { pageview } from 'react-ga';

// TODO: Predelat na helper
const SendPageViewToGA = () => {
  pageview(window.location.href);
};

export default SendPageViewToGA;
