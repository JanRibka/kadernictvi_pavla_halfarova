import { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

import Box from '@mui/material/Box';

import AboutMe from '../kadernictviPH/aboutMe/AboutMe';
import Contact from '../kadernictviPH/contact/Contact';
import Gallery from '../kadernictviPH/gallery/Gallery';
import Intro from '../kadernictviPH/intro/Intro';
import Services from '../kadernictviPH/services/Services';

interface IProps {}

const KadernictviPage = forwardRef(
  (props: IProps, ref: Ref<unknown> | undefined) => {
    const refIntro = useRef<HTMLDivElement>(null);
    const refAboutMe = useRef<HTMLDivElement>(null);
    const refServices = useRef<HTMLDivElement>(null);
    const refGallery = useRef<HTMLDivElement>(null);
    const refContact = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      get intro() {
        if (!!refIntro) {
          return refIntro;
        } else {
          return undefined;
        }
      },
      get aboutMe() {
        if (!!refAboutMe) {
          return refAboutMe;
        } else {
          return undefined;
        }
      },
      get services() {
        if (!!refServices) {
          return refServices;
        } else {
          return undefined;
        }
      },
      get gallery() {
        if (!!refGallery) {
          return refGallery;
        } else {
          return undefined;
        }
      },
      get contact() {
        if (!!refContact) {
          return refContact;
        } else {
          return undefined;
        }
      },
    }));

    return (
      <Box
        component='main'
        sx={{
          overflow: "hidden",
        }}
      >
        <Intro ref={refIntro} />
        <AboutMe ref={refAboutMe} />
        <Services ref={refServices} />
        <Gallery ref={refGallery} />
        <Contact ref={refContact} />
      </Box>
    );
  }
);

export default KadernictviPage;
