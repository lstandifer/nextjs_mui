import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import Link from 'components/Link';
import { toggleLeftSidebar, toggleRightSidebar } from 'redux/actions/sidebar';
import { useDispatch } from 'react-redux';

const SideDrawer = ({ navLinks, direction }) => {
  const dispatch = useDispatch();

  const leftIsVisible = useSelector((state) => state.sidebar.leftIsVisible);
  const rightIsVisible = useSelector((state) => state.sidebar.rightIsVisible);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    if (direction === 'left') {
      dispatch(toggleLeftSidebar(true));
    } else {
      dispatch(toggleRightSidebar(true));
    }
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250, marginTop: `auto`, marginBottom: `auto` }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {navLinks.map(({ title, path }, i) => (
        <Typography
          variannt="button"
          key={`${title}${i}`}
          sx={{
            ml: 5,
            my: 2,
            textTransform: `uppercase`,
          }}
        >
          <Link sx={{ color: 'common.white' }} href={path}>
            {title}
          </Link>
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <IconButton
        edge="start"
        aria-label="menu"
        onClick={toggleDrawer(direction, true)}
        sx={{
          color: `common.white`,
          display: { xs: `inline`, md: `none` },
        }}
      >
        <Menu fontSize="large" />
      </IconButton>
      <Drawer
        anchor={direction}
        open={direction === 'right' ? rightIsVisible : leftIsVisible}
        onClose={toggleDrawer(direction, false)}
        sx={{
          '.MuiDrawer-paper': {
            bgcolor: 'primary.main',
          },
        }}
      >
        {list(direction)}
      </Drawer>
    </>
  );
};

export default SideDrawer;
