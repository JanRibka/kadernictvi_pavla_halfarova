import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const SectionTitleStyled = styled(Typography)(({ theme }) => ({
  marginBottom: "40px",
  position: "relative",
  "&:after": {
    content: "''",
    backgroundColor: theme.palette.text.primary,
    position: "absolute",
    top: "100%",
    left: "calc(50% - 25px)",
    width: "50px",
    height: "2px",
  },
}));

export default SectionTitleStyled;
