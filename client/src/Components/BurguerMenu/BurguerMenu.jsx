import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import WorkIcon from '@mui/icons-material/Work';
import "./burguer.css"
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { grey } from '@mui/material/colors';


const drawerWidth = 300;
const width = 0;


const menuItems = [
  { text: "Acerca de nosotros", url: "/AcercaDeNosotros", icon: <EmojiPeopleIcon /> },
  { text: "Recetas Vegan", url: "/menu", icon: <LocalDiningIcon /> },
  { text: "Trabaja con nuestro equipo!", url: "/work-with-us", icon: <WorkIcon /> }
];

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export const BurguerMenu = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  const WhiteIconButton = styled(IconButton)({
    color: grey[50],
  });
  
  const WhiteMenuIcon = styled(MenuIcon)({
    color: grey[50],
  });
  
  const WhiteChevronLeftIcon = styled(ChevronLeftIcon)({
    color: grey[50],
  });
  
  const WhiteChevronRightIcon = styled(ChevronRightIcon)({
    color: grey[50],
  });
  
  const WhiteAppBar = styled(AppBar)({
    backgroundColor: grey[50],
    color: theme.palette.text.primary,
  });
  


  return (
    <Box sx={{ display: 'flex' }}>
        

 
    <WhiteIconButton
      aria-label="open drawer"
      edge="end"
      onClick={handleDrawerOpen}
      sx={{ ...(open && { display: 'none' }) }}
    >
      <WhiteMenuIcon />
    </WhiteIconButton>
 

     
        
     
      <Main open={open} >
        <DrawerHeader/>
        
      </Main>
      <Drawer
  sx={{
    width: width,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      backgroundColor: '#945D60',
      color: '#ffffff',
    },
  }}
  variant="persistent"
  anchor="left"
  open={open}
>
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'rtl' ? <ChevronLeftIcon  /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
       <List>
  {menuItems.map(({ text, url, icon }) => (
    <ListItem key={text} disablePadding>
      <ListItemButton
        component={Link}
        to={url}
        sx={{ '&:hover': { color: 'white !important' } }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>

      </Drawer>
    </Box>
  );
}


