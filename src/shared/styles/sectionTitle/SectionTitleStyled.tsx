import { styled } from '@mui/material/styles';
import Typography, { TypographyProps } from '@mui/material/Typography';

const SectionTitleStyled = styled(
  ({ variant, className, ...props }: TypographyProps) => (
    <Typography variant='h4' className={className} {...props} />
  )
)`
  margin-bottom: 30px;
  &:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
  }
`;
export default SectionTitleStyled;
