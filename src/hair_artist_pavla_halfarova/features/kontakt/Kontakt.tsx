import { forwardRef, Ref } from 'react';
import AppGoogleMapsIframe from 'shared/components/googleMap/AppGoogleMapsIframe';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';

import Box from '@mui/material/Box';
import { SxProps } from '@mui/material/styles';

interface IProps {}

const Kontakt = forwardRef(
  (props: IProps, ref: Ref<HTMLDivElement> | undefined) => {
    return (
      <Box ref={ref} sx={componentWrapperStyle}>
        <Box>
          <GridContainer sx={gridContainerStyle}>
            <GridItem xs={6}>zsdg</GridItem>
            <GridItem xs={6}>
              <AppGoogleMapsIframe
                title='hair-salon-ph'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381.36170952929723!2d18.049486077469826!3d49.98350549244384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4711616e6b378b61%3A0xc80b162cab0c5a6d!2zxIxlc2vDoSBzcG_FmWl0ZWxuYSwgYS5zLiAtIEFUTQ!5e0!3m2!1scs!2scz!4v1661885442899!5m2!1scs!2scz'
                frameBorder=''
                style={{ border: "0" }}
                allowFullScreen={false}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              />
            </GridItem>
          </GridContainer>
        </Box>
      </Box>
    );
  }
);

export default Kontakt;

// Styles
const componentWrapperStyle: SxProps = {
  padding: "6rem",
};

const gridContainerStyle: SxProps = {
  height: "30rem",
};
