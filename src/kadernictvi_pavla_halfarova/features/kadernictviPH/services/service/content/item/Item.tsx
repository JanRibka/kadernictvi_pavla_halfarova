import { useTranslation } from 'react-i18next';

import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import ItemStyled from './styledComponents/ItemStyled';

export interface IItemProps {
  name: string;
  price: number;
}

const Item = (props: IItemProps) => {
  //Consts
  const { t } = useTranslation(["kadernictviPH\\services\\services"]);
  const theme = useTheme();
  const breakpointMdDwn: boolean = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ItemStyled>
      <Box
        sx={{
          color: "text.secondary",
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
      {/* Price from */}
      <Box
        className='price-from'
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* From */}
        <Typography
          sx={{
            color: "primary.main",
            marginRight: "5px",
          }}
        >
          {t("servicePriceFrom")}
        </Typography>

        {/* Price */}
        <Typography
          variant='h4'
          sx={{
            color: "text.secondary",
            marginRight: "5px",
            width: breakpointMdDwn ? "52px" : "75px",
            fontSize: breakpointMdDwn ? "1.5rem" : undefined,
            lineHeight: breakpointMdDwn ? "1.334" : undefined,
            letterSpacing: breakpointMdDwn ? "0em" : undefined,
            textAlign: "end",
          }}
        >
          {props.price}
        </Typography>

        {/* Currency */}
        <Typography
          variant='h5'
          sx={{
            color: "text.secondary",
          }}
        >
          Kč
        </Typography>
      </Box>
    </ItemStyled>
  );
};

export default Item;
