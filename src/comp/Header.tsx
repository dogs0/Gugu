import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TDrawer from './Drawer';
import type { pageIndexType } from '../page/Page';


export default function SearchAppBar( {Title, Items}: {Title: string, Items: pageIndexType}) {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

            <TDrawer Items={Items}/>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {Title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
