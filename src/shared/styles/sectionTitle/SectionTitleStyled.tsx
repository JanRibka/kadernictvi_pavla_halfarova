import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const SectionTitleStyled = styled(
  ({ className, variant, ...props }: TypographyProps) => (
    <Typography variant='h4' {...props} className={className} />
  )
)`
  margin-bottom: 30px;
  &:before {
    content: "";
    width: 50px;
    height: 2px;
  }
`;
export default SectionTitleStyled;
