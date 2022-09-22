import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import Box from '@mui/material/Box';

import Contact from '../kadernictviPH/contact/Contact';
import MyWork from '../kadernictviPH/gallery/MyWork';
import Intro from '../kadernictviPH/intro/Intro';

interface IProps {}

const KadernictviPage = forwardRef(
  (props: IProps, ref: Ref<unknown> | undefined) => {
    const refIntro = useRef<HTMLDivElement>(null);
    const refGallery = useRef<HTMLDivElement>(null);
    const refContact = useRef<HTMLDivElement>(null);
    // TODO: První sekce bude mít nadpis h1 kvuli seo a přestylovat na h4
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
      <Box>
        <Intro ref={refIntro} />
        <MyWork ref={refGallery} />
        <Contact ref={refContact} />
      </Box>
    );
  }
);

export default KadernictviPage;
