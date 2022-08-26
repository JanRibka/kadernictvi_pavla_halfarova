import { forwardRef, LegacyRef } from 'react';

interface IProps {}

const Galerie = forwardRef<HTMLDivElement, IProps>((props, ref) => {
  return <div ref={ref}></div>;
});

export default Galerie;
