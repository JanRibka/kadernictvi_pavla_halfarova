import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  src: string;
  alt: string;
}

const ImgStyled = styled(({ src, alt, ...props }: IProps) => (
  <Box component='img' src={src} alt={alt} {...props} />
))`
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: auto;
`;

export default ImgStyled;
