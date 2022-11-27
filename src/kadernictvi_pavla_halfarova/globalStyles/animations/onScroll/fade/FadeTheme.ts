import { createTheme } from '@mui/system';

const fadeTheme = createTheme({
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
