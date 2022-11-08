import CountUp from "react-countup";

import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import ItemStyled from "./styledComponents/ItemStyled";

export interface IItemProps {
  name: string;
  price: number;
}
// TOTO: Texty do překladů
const Item = (props: IItemProps) => {
  //Consts
  const theme = useTheme();
  const breakpointMdDwn: boolean = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ItemStyled>
      <Box
        sx={{
          color: "common.third.main",
          marginRight: "10px",
        }}
      >
        <CheckIcon />
      </Box>
      {/* Name */}
      <Typography
        sx={{
          color: "primary.main",
          marginRight: "20px",
        }}
      >
        {props.name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Price from */}
        <Typography
          sx={{
            color: "primary.main",
            marginRight: "5px",
          }}
        >
          od
        </Typography>
        {/* Price */}
        <CountUp start={0} end={props.price} delay={2}>
          {({ countUpRef }) => (
            <Typography
              ref={countUpRef}
              variant='h4'
              sx={{
                color: "common.third.main",
                marginRight: "5px",
                width: breakpointMdDwn ? "52px" : "75px",
                fontSize: breakpointMdDwn ? "1.5rem" : undefined,
                lineHeight: breakpointMdDwn ? "1.334" : undefined,
                letterSpacing: breakpointMdDwn ? "0em" : undefined,
                textAlign: "end",
              }}
            >
              {/* {props.price} */}
            </Typography>
          )}
        </CountUp>

        {/* Currency */}
        <Typography
          variant='h5'
          sx={{
            color: "common.third.main",
          }}
        >
          Kč
        </Typography>
      </Box>
    </ItemStyled>
  );
};

export default Item;
