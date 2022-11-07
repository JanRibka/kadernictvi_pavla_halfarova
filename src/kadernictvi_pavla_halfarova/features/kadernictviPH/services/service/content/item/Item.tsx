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
        }}
      >
        <Typography
          sx={{
            color: "primary.main",
          }}
        >
          od
        </Typography>
        <Typography
          sx={{
            color: "common.third.main",
          }}
        >
          {props.price}
        </Typography>
        <Typography
          sx={{
            color: "common.third.main",
          }}
        >
          ,-
        </Typography>
      </Box>
    </ItemStyled>
  );
};

export default Item;
