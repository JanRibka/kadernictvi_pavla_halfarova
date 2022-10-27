import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';

const AccordionSummaryStyled = styled(AccordionSummary)(({ theme }) => ({
  flexDirection: "row-reverse",

  "& .MuiAccordionSummary-content, & .MuiAccordionSummary-content.Mui-expanded":
    {
      marginLeft: theme.spacing(1),
    },
}));

export default AccordionSummaryStyled;
