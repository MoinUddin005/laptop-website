import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import MyOrder from '../MyOrder/MyOrder';
import Addservice from '../Addservice/Addservice';
import Addreview from './AddReview/Addreview';
import Pay from '../Pay/Pay';
import DashHome from '../DashHome/DashHome';


const drawerWidth = 200;


function Dashboard(props) {
    const { window } = props;  
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin , logout } = useAuth();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Link className="text-decoration-none mt-2" to={`${url}`}><Button variant="outlined">Home</Button></Link> <br />
            {!admin && <Box>
                <Link className="text-decoration-none" to={`${url}/pay`}><Button variant="outlined">Pay</Button></Link> <br />
                <Link className="text-decoration-none" to={`${url}/myOrders`}><Button variant="outlined">MyOrders</Button></Link> <br />
                <Link className="text-decoration-none" to={`${url}/review`}><Button variant="outlined">AddReview</Button></Link> <br />
            </Box>
            }

            {admin &&<Box>
                    <Link className="text-decoration-none" to={`${url}/manageOrders`}><Button variant="outlined">Manage All Orders</Button></Link> <br />
                    <Link className="text-decoration-none" to={`${url}/addProduct`}><Button variant="outlined">Add A Product</Button></Link> <br />
                    <Link className="text-decoration-none" to={`${url}/makeAdmin`}><Button variant="outlined">Make Admin</Button></Link> <br />
                    <Link className="text-decoration-none" to={`${url}/manageProducts`}><Button variant="outlined">Manage Products</Button></Link> <br />
                </Box>
            }
            <Link className="text-decoration-none" to={`${url}/home`}><Button onClick={logout} variant="outlined">Logout</Button></Link>
            
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
                        <MenuIcon/>
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
                    
                    <Route exact path={`${path}`}>
                        <DashHome></DashHome>
                    </Route>

                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>

                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrder></ManageAllOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Addreview></Addreview>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <Addservice></Addservice>
                    </Route>
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