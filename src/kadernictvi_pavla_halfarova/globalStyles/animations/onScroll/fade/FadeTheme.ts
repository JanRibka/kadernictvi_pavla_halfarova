import { AppTheme } from 'kadernictvi_pavla_halfarova/globalStyles/AppTheme';

import createTheme from '@mui/material/styles/createTheme';

const fadeTheme = createTheme(AppTheme, {
  components: {
    FadeInnerWrapperStyled: {
      variants: [
        {
          props: { direction: "up" },
          style: {
            transform: "translateY(150px)",
          },
        },
        {
          props: { direction: "right" },
          style: {
            transform: "translateX(-150px)",
          },
        },
        {
          props: { direction: "down" },
          style: {
            transform: "translateY(-150px)",
          },
        },
        {
          props: { direction: "left" },
          style: {
            transform: "translateX(150px)",
          },
        },
      ],
    },
  },
});

export default fadeTheme;
