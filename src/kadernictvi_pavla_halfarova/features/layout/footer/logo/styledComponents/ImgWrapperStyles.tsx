import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const ImgWrapperStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))({
  padding: "0",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
});

export default ImgWrapperStyled;
