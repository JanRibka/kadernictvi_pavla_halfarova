import Fade from 'kadernictvi_pavla_halfarova/globalStyles/animations/onScroll/fade/Fade';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Content from './content/Content';
import { IItemProps } from './content/item/Item';
import Icon from './icon/Icon';

interface IProps {
  icon: string;
  iconDescription: string;
  description: string;
  items: IItemProps[];
  animation: "fadeInLeft" | "fadeInRight";
}

const Service = (props: IProps) => {
  //Consts
  const theme = useTheme();
  const breakpointLgUp: boolean = useMediaQuery(theme.breakpoints.up("lg"));
  const breakpointMdDwn: boolean = useMediaQuery(theme.breakpoints.down("md"));
  const breakpointSmDwn: boolean = useMediaQuery(theme.breakpoints.down("sm"));
  const wrapperMargin: string =
    breakpointLgUp || (breakpointMdDwn && !breakpointSmDwn) ? "0 40px" : "0";

  return (
    <Box sx={{ width: "100%", margin: wrapperMargin }}>
      <Fade animation={props.animation}>
        <>
          {/* Icon */}
          <Icon
            icon={props.icon}
            iconDescription={props.iconDescription}
            description={props.description}
          />
          {/* Content */}
          <Content items={props.items} />
        </>
      </Fade>
    </Box>
  );
};

export default Service;
