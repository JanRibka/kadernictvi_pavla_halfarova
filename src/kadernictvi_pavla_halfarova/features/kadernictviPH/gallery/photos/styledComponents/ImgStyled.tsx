import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  src: string;
  alt: string;
  loading?: "lazy" | "eager";
}

const ImgStyled = styled(({ src, alt, loading, ...props }: IProps) => (
  <Box component='img' src={src} alt={alt} loading={loading} {...props} />
))`
  width: 100%;
  height: auto;
  transition: filter 500ms ease;
`;

export default ImgStyled;
