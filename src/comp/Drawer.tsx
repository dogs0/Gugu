import * as React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import type { pageIndexType } from '../page/Page';

export default function TDrawer({Items}: {Items: pageIndexType}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {
        Items.map((Item: any, index: any)=>([

          Item.map((content: any, index: any) => (
          <ListItem key={index} disablePadding>
            <Link to={content[1]} style={{textDecoration: 'none', width: '100%', color:useTheme().palette.text.primary}}>
            <ListItemButton href={content[1]}>
              <ListItemIcon>
              </ListItemIcon>
              <ListItemText primary={content[0]} />
            </ListItemButton>
            </Link>
          </ListItem>
        )),
      <Divider key={index} />

      ])
    )
        }
      </List>
    </Box>
  );

  return (
    <div>
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}