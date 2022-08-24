import React from 'react';

import { GridProps } from '@mui/material/Grid';

import StyledGridItem from './StyledGridItem';

export interface IGridItemProps extends GridProps {}

const GridItem: React.FC<IGridItemProps> = (props) => {
  const { ...restProps } = props;

  return (
    <StyledGridItem item {...restProps}>
      {props.children}
    </StyledGridItem>
  );
};

export default GridItem;
