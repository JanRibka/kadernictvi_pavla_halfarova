import { CSSProperties, HTMLAttributeReferrerPolicy } from 'react';

interface IProps {
  title: string;
  src: string;
  frameBorder: string;
  style: CSSProperties;
  allowFullScreen: boolean;
  loading: "eager" | "lazy";
  referrerPolicy: HTMLAttributeReferrerPolicy;
}

const AppGoogleMapsIframe = (props: IProps) => {
  return (
    <iframe
      title={props.title}
      src={props.src}
      width='100%'
      height='100%'
      frameBorder={props.frameBorder}
      style={props.style}
      allowFullScreen={props.allowFullScreen}
      tabIndex={0}
      loading={props.loading}
      referrerPolicy={props.referrerPolicy}
    ></iframe>
  );
};

export default AppGoogleMapsIframe;
