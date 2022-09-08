import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const FacebookIconStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))`
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  color: white;
  background-color: #3b5998;
  height: 60px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  transition: border-top-left-radius 0.1s linear 0s,
    border-top-right-radius 0.1s linear 0.1s,
    border-bottom-right-radius 0.1s linear 0.2s,
    border-bottom-left-radius 0.1s linear 0.3s;
  &:hover {
    border-radius: 50%;
  }
  svg {
    font-size: xx-large;
  }
`;

export default FacebookIconStyled;
