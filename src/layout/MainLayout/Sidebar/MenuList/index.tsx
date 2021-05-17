import * as React from 'react';
import {Typography} from "@material-ui/core";
import NavGroup from "./NavGroup";
import menuItem from "./../../../../menu-items/main-menu-items";

const MenuList = () => {
  return <>{menuItem.items.map(item => {
    switch (item.type) {
      case "group":
        return <NavGroup key={item.id} item={item}/>;
      default:
        return (
            <Typography key={item.id} variant="h6" color="error" align="center">
              Menu Items Error
            </Typography>
        );
    }
  })}</>;
};
export default MenuList;
