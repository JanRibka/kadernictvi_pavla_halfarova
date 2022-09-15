import { CardProps } from '@mui/material/Card';

import CardStyled from './CardStyled';

const Card = (props: CardProps) => {
  return (
    <>
      <CardStyled {...props}></CardStyled>
      <svg>
        <filter id='wavy2'>
          <feTurbulence
            x='0'
            y='0'
            baseFrequency='0.02'
            numOctaves='5'
            seed='1'
          ></feTurbulence>
          <feDisplacementMap in='SourceGraphic' scale='20' />
        </filter>
      </svg>
    </>
  );
};

export default Card;
