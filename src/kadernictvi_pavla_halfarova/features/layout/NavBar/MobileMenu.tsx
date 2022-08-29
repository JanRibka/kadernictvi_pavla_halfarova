import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';

const MobileMenu = () => {
  return (
    <MenuList>
      <MenuItem>
        <ListItemText>Item 1</ListItemText>
      </MenuItem>
      <MenuItem>Item 2</MenuItem>
      <MenuItem>Item 3</MenuItem>
      <MenuItem>Item 4</MenuItem>
    </MenuList>
  );
};

export default MobileMenu;
