import * as React from 'react';
import { Divider, List, makeStyles, Typography } from "@material-ui/core";
import NavItem from "./../NavItem";
import NavCollapse from "./../NavCollapse";
import {MenuItemType} from "../../../../../menu-items/main-menu-items";
const useStyles = makeStyles(theme => ({
  menuCaption: {
   // ...theme.typography.menuCaption // todo fix
  },
  subMenuCaption: {
    //...theme.typography.subMenuCaption // todo fix
  },
  menuDivider: {
    marginTop: "2px",
    marginBottom: "10px"
  }
}));
interface NavGroupProps {
    item: MenuItemType;

}
const NavGroup = (props: NavGroupProps) => {
  const { item } = props;
  const classes = useStyles();
  const items = item.children?.map(menu => {
    switch (menu.type) {
      case "collapse":
        return <NavCollapse key={menu.id} menu={menu} level={1} />;
      case "item":
        return <NavItem key={menu.id} item={menu} level={1} />;
      default:
        return (
          <Typography key={menu.id} variant="h6" color="error" align="center">
            Menu Items Error
          </Typography>
        );
    }
  });
  return (
    <React.Fragment>
      <List
        subheader={
          item.title && (
            <Typography
              variant="caption"
              className={classes.menuCaption}
              display="block"
              gutterBottom
            >
              {item.title}
              {item.caption && (
                <Typography
                  variant="caption"
                  className={classes.subMenuCaption}
                  display="block"
                  gutterBottom
                >
                  {item.caption}
                </Typography>
              )}
            </Typography>
          )
        }
      >
        {items}
      </List>
      <Divider className={classes.menuDivider} />
    </React.Fragment>
  );
};
export default NavGroup;
