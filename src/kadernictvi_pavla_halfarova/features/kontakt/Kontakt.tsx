import { forwardRef, LegacyRef } from 'react';

interface IProps {}

const Kontakt = forwardRef(
  (props: IProps, ref: LegacyRef<HTMLDivElement> | undefined) => {
    return <div ref={ref}></div>;
  }
);

export default Kontakt;
