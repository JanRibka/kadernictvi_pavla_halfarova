import { event, EventArgs } from 'react-ga';

// TODO: priskrolovani zavolat event pokud je dana sekce aktivni
// TODO: https://blog.saeloun.com/2022/02/17/how-to-integrate-react-app-with-google-analytics.html
const SendEventToGA = (
  category: string,
  action: string,
  label: string = ""
) => {
  const args: EventArgs = {
    category: category,
    action: action,
    label: label,
  };
  event(args);
};

export default SendEventToGA;
