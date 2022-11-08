import Box from "@mui/material/Box";

import Item, { IItemProps } from "./item/Item";

interface IProps {
  items: IItemProps[];
}

const Content = (props: IProps) => {
  const RenderItems = (): JSX.Element[] => {
    let result: JSX.Element[] = [];

    props.items.forEach((item, index) => {
      result.push(
        <Item
          name={item.name}
          price={item.price}
          key={"item_" + item.name + "_" + index}
        />
      );
    });

    return result;
  };

  return <Box sx={{ margin: "40px 0 60px 0" }}>{RenderItems()}</Box>;
};

export default Content;
