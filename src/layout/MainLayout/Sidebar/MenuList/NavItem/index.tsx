import * as React from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import {
  useMediaQuery,
  Avatar,
  Chip,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography, useTheme
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import * as actionTypes from "../../../../../store/actions";
import {MenuItemType} from "../../../../../menu-items/main-menu-items";
import {useSelector} from "../../../../../store/reducer";
const useStyles = makeStyles(theme => ({
  listIcon: {
    minWidth: "18px",
    marginTop: "auto",
    marginBottom: "auto"
  },
  listCustomIconSub: {
    width: "6px",
    height: "6px"
  },
  listCustomIconSubActive: {
    width: "8px",
    height: "8px"
  },
  listItem: {
    marginBottom: "5px",
    alignItems: "center"
  },
  listItemNoBack: {
    marginBottom: "5px",
    backgroundColor: "transparent !important",
    paddingTop: "8px",
    paddingBottom: "8px",
    alignItems: "flex-start"
  },
  subMenuCaption: {
    // ...theme.typography.subMenuCaption //todo fix
  },
  listCustomIcon:{

  },
  menuIcon:{

  }
}));
interface NavItemProps {
  item: MenuItemType;
  level: number;
}
const NavItem = (props: NavItemProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("md"));
  const customization = useSelector(state => state.customization);
  const dispatch = useDispatch();
  const { item, level } = props;
  const Icon = item.icon;
  const itemIcon = item.icon ? (
    <Icon stroke={1.5} size="1.3rem" className={classes.listCustomIcon} />
  ) : (
    <FiberManualRecordIcon
      className={
        customization.isOpen === item.id
          ? classes.listCustomIconSubActive
          : classes.listCustomIconSub
      }
      // fontSize={level > 0 ? "inherit" : "default"}
    />
  );
  let itemIconClass = !item.icon ? classes.listIcon : classes.menuIcon;
  let itemTarget = "";
  if (item.target) {
    itemTarget = "_blank";
  }
  let listItemProps = { component: Link, to: item.url } as {component: React.ElementType, to?: string, href?: string};
  if (item.external) {
    listItemProps = { component: "a", href: item.url };
  }
  const itemHandler = (id: string) => {
    dispatch({ type: actionTypes.MENU_OPEN, isOpen: id });
    matchesSM && dispatch({ type: actionTypes.SET_MENU, opened: false });
  };
  return (
    <ListItem
      disabled={item.disabled}
      className={level > 1 ? classes.listItemNoBack : classes.listItem}
      sx={{ borderRadius: customization.borderRadius + "px" }}
      selected={customization.isOpen === item.id}
      onClick={() => itemHandler(item.id)}
      button
      target={itemTarget}
      style={{ paddingLeft: level * 23 + "px" }}
      {...listItemProps}
    >
      <ListItemIcon className={itemIconClass}>{itemIcon}</ListItemIcon>
      <ListItemText
        primary={
          <Typography
            variant={customization.isOpen === item.id ? "h5" : "body1"}
            color="inherit"
          >
            {item.title}
          </Typography>
        }
        secondary={
          item.caption && (
            <Typography
              variant="caption"
              className={classes.subMenuCaption}
              display="block"
              gutterBottom
            >
              {item.caption}
            </Typography>
          )
        }
      />
      {item.chip && (
        <Chip
          color={item.chip.color}
          variant={item.chip.variant}
          size={item.chip.size}
          label={item.chip.label}
          avatar={item.chip.avatar && <Avatar>{item.chip.avatar}</Avatar>}
        />
      )}
    </ListItem>
  );
};
export default NavItem;
