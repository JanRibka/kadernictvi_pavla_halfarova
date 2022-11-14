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
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: scale 500ms ease;

  &:hover {
    scale: 1.1;
  }
`;

export default ImgStyled;
