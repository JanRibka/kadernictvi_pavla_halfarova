import { event, EventArgs } from 'react-ga';

// TODO: priskrolovani zavolat event pokud je dana sekce aktivni
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
