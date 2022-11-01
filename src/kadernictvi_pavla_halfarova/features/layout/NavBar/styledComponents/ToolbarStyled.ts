import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.dark,
}));

export default ToolbarStyled;
