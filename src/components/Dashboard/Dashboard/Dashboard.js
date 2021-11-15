import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import Myorder from '../Myorder/Myorder';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';


const drawerWidth = 200;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const{admin, logOut} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = "/home">Home</Link> <br/>
<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}`}>Dashboard</Link><br/>
<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/myorder`}>My Order</Link><br/>
<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/review`}>Review</Link><br/>
<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/pay`}>Pay</Link><br/>

{admin && <Box>
  <Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/makeAdmin`}>Make Admin</Link><br/>
  <Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/addProduct`}>Add Product</Link><br/>
  <Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/manageAllOrders`}>Manage All Orders</Link><br/>
  <Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} to = {`${url}/manageProducts`}>Manage Products</Link>
</Box>
}
<Link style = {{textDecoration : 'none', color: 'blue', fontSize: '20px'}} onClick={logOut}>Logout</Link> <br/>

      
      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
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
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />


      <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/myorder`}>
          <Myorder></Myorder>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path ={`${path}/addProduct`} >
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path ={`${path}/manageAllOrders`} >
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path ={`${path}/manageProducts`} >
          <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
       
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
