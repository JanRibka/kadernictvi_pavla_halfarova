import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

const ImgWrapperStyled = styled(IconButton)(({ theme }) => ({
  padding: "0",
  width: "320px",
  height: "320px",
  borderRadius: "50%",
  transition: `width 300ms ease-out,
  height 500ms ease-out`,

  img: {
    height: "inherit",
    borderRadius: "inherit",
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default ImgWrapperStyled;
