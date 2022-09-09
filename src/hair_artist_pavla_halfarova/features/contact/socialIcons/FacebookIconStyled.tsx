import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const FacebookIconStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))`
  background-color: #3b5998;
`;

export default FacebookIconStyled;
