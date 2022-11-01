import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const LabelWrapperStyled = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export default LabelWrapperStyled;
