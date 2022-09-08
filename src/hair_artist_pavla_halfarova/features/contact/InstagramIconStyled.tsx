import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const InstagramIconStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))`
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  color: white;
  background: radial-gradient(
      circle farthest-corner at 35% 90%,
      #fec564,
      transparent 50%
    ),
    radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%),
    radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 20% -50%,
      #5258cf,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%),
    radial-gradient(
      ellipse farthest-corner at 60% -20%,
      #893dc2,
      transparent 50%
    ),
    radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent),
    linear-gradient(
      #6559ca,
      #bc318f 30%,
      #e33f5f 50%,
      #f77638 70%,
      #fec66d 100%
    );
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

export default InstagramIconStyled;
