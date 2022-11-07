import Box from '@mui/material/Box';

import Content from './content/Content';
import { IItemProps } from './content/item/Item';
import Icon from './icon/Icon';

interface IProps {
  icon: string;
  iconDescription: string;
  description: string;
  items: IItemProps[];
}

const Service = (props: IProps) => {
  return (
    <Box>
      {/* Icon */}
      <Icon
        icon={props.icon}
        iconDescription={props.iconDescription}
        description={props.description}
      />
      {/* Content */}
      <Content items={props.items} />
    </Box>
  );
};

export default Service;
