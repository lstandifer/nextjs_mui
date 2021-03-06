import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLeftSidebar, toggleRightSidebar } from 'redux/actions/sidebar';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'components/Link';
import { ListItemButton } from '@mui/material';

export default function SideDrawer({ direction }) {
  const dispatch = useDispatch();

  const leftIsVisible = useSelector((state) => state.sidebar.leftIsVisible);
  const rightIsVisible = useSelector((state) => state.sidebar.rightIsVisible);

  const toggleDrawer = (direction) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    direction === 'left'
      ? dispatch(toggleLeftSidebar())
      : dispatch(toggleRightSidebar());
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Dashboard', 'About', 'Inventory', 'Users'].map((text, index) => (
          <ListItem
            button
            component={Link}
            href={`/` + text.toLowerCase().replace(/\s/g, '')}
            key={text}
          >
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button component={Link} href={`/dashboard`} key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor={direction}
        open={direction === 'left' ? leftIsVisible : rightIsVisible}
        onClose={toggleDrawer(direction, false)}
      >
        {list(direction)}
      </Drawer>
    </div>
  );
}
