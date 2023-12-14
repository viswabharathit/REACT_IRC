// import React from 'react';
// import { Link } from 'react-router-dom';
// // import '../assets/css/nav.css';

// const Nav = () => {
//   return (
//     <div className="divclass"> 
//       <nav className="navstyle">

//         <li><Link to='/home' className='buttonstyle'>HOME</Link></li>
//         <li><Link to='/about' className='buttonstyle'>ABOUT</Link></li>
//         <li><Link to='/contact' className='buttonstyle'>CONTACT</Link></li>

//       </nav>
//     </div>
//   );
// };

// export default Nav;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Payments from '@mui/icons-material/Payment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { green } from '@mui/material/colors';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Nav() {
    const Nav=useNavigate();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
};

const handleHome =()=>
{
    Nav('/');
}
const handleAbout =()=>
{
    Nav('/about');
}
const handleContact =()=>
{
    Nav('/contact');
}
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  };
  return (
    <>
    <AppBar position="static" sx="100vw">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Payments sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DONOR GATEWAY
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            DONOR GATEWAY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' ,justifyContent:'end',gap:'1cm',mr:'2cm'} }}>
              <Button onClick={handleHome}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    HOME
                  </Button>
              <Button onClick={handleAbout}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    ABOUT
                  </Button>
              <Button onClick={handleContact}
                sx={{ my: 2, color: 'white', display: 'block' }}>
                    CONTACT
              </Button>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="LOGIN">
              <IconButton onClick={handleOpen}>
                <AccountCircle sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 ,color:'Background',size:'2cm'}} />
              </IconButton>
            </Tooltip>
         
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h3" color="secondary" sx={{mx:20}}>
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" color="secondary" sx={{my:1,width:"100%"}}/>
          <TextField id="outlined-basic" label="Password" variant="outlined" color="secondary" sx={{my:1,width:"100%"}}/>
          <Button variant="contained" color="secondary" sx={{mx:20,my:2,p:1}}>Submit</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
export default Nav;