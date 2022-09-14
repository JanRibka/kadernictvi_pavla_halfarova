import { forwardRef, LegacyRef, Ref } from 'react';

import Box from '@mui/material/Box';

interface IProps {}

const Galerie = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return <Box ref={ref}></Box>;
});

export default Galerie;
