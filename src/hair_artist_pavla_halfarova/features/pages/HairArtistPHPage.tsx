import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import Contact from '../contact/Contact';
import Galerie from '../gallery/Gallery';

interface IProps {}

const KadernictviPage = forwardRef(
  (props: IProps, ref: Ref<unknown> | undefined) => {
    const refGallery = useRef<HTMLDivElement>(null);
    const refContact = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      get galerie() {
        if (!!refGallery) {
          return refGallery.current;
        } else {
          return undefined;
        }
      },
      get kontakt() {
        if (!!refContact) {
          return refContact.current;
        } else {
          return undefined;
        }
      },
    }));

    return (
      <div style={{ height: "3000px" }}>
        <Galerie ref={refGallery} />
        <Contact ref={refContact} />
      </div>
    );
  }
);

export default KadernictviPage;
