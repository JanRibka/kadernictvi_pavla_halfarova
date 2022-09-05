import { forwardRef, LegacyRef } from 'react';

interface IProps {}

const Galerie = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return <div style={{ height: "500px" }} ref={ref}></div>;
});

export default Galerie;
