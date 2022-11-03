import { CardMediaProps } from '@mui/material/CardMedia';

import CardMediaStyled from './styledComponents/CardMediaStyled';

const CardMedia = (props: CardMediaProps) => {
  return <CardMediaStyled {...props}></CardMediaStyled>;
};

export default CardMedia;
