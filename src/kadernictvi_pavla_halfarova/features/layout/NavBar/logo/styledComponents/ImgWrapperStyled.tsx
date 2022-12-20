import Box, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

interface IProps extends BoxProps {
  href: string | undefined;
  target: string | undefined;
}

const ImgWrapperStyled = styled(({ className, ...props }: IProps) => (
  <Box {...props} className={className} />
))({
  padding: "0",
  width: "320px",
  height: "320px",
  borderRadius: "50%",
  transition: "width 300ms ease-out, height 500ms ease-out",
});

export default ImgWrapperStyled;
