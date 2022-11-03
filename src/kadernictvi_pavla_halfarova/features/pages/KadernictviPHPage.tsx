import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import Box from '@mui/material/Box';

import Contact from '../kadernictviPH/contact/Contact';
import MyWork from '../kadernictviPH/gallery/MyWork';
import Intro from '../kadernictviPH/intro/Intro';
import Services from '../kadernictviPH/services/Services';

interface IProps {}

const KadernictviPage = forwardRef(
  (props: IProps, ref: Ref<unknown> | undefined) => {
    const refIntro = useRef<HTMLDivElement>(null);
    const refServices = useRef<HTMLDivElement>(null);
    const refGallery = useRef<HTMLDivElement>(null);
    const refContact = useRef<HTMLDivElement>(null);
    // TODO: První sekce bude mít nadpis h1 kvuli seo a přestylovat na h4
    useImperativeHandle(ref, () => ({
      get gallery() {
        if (!!refGallery) {
          return refGallery.current;
        } else {
          return undefined;
        }
      },
      get contact() {
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
        <Services ref={refServices} />
        <MyWork ref={refGallery} />
        <Contact ref={refContact} />
      </Box>
    );
  }
);

export default KadernictviPage;
