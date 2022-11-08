import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ItemStyled from './styledComponents/ItemStyled';

export interface IItemProps {
  name: string;
  price: number;
}
// TOTO: Texty do překladů
const Item = (props: IItemProps) => {
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
        <Typography
          variant='h5'
          sx={{
            color: "common.third.main",
            marginRight: "5px",
            width: "52px",
            textAlign: "end",
          }}
        >
          {props.price}
        </Typography>
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
