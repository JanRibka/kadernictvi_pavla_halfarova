import CheckIcon from '@mui/icons-material/Check';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ItemStyled from './styledComponents/ItemStyled';

export interface IItemProps {
  name: string;
  price: number;
}

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
        <Typography
          sx={{
            color: "primary.main",
            marginRight: "5px",
          }}
        >
          od
        </Typography>

        <Typography
          variant='h5'
          sx={{
            color: "common.third.main",
            marginRight: "5px",
          }}
        >
          {props.price}
        </Typography>
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
