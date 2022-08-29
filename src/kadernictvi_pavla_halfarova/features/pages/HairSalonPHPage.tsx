import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import Galerie from '../galerie/Galerie';
import Kontakt from '../kontakt/Kontakt';

interface IProps {}

const KadernictviPage = forwardRef(
  (props: IProps, ref: Ref<unknown> | undefined) => {
    const refGalerie = useRef<HTMLDivElement>(null);
    const refKontakt = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      get galerie() {
        if (!!refGalerie) {
          return refGalerie.current;
        } else {
          return undefined;
        }
      },
      get kontakt() {
        if (!!refGalerie) {
          return refKontakt.current;
        } else {
          return undefined;
        }
      },
    }));

    return (
      <div style={{ height: "3000px" }}>
        <Galerie ref={refGalerie} />
        <Kontakt ref={refKontakt} />
      </div>
    );
  }
);

export default KadernictviPage;
