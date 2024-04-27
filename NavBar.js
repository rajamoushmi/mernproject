import * as React from 'react';
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu'; // Add this import
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import Icon from '@mui/icons-material/EmojiFoodBeverage';

const pages = ['Login'];
const settings = ['Profile', 'Change password', 'Orders', 'Logout'];

const NavBar = () => {
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

  return (
    <>
      <AppBar sx={{ background: "#403F36" }} position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleOpenNavMenu}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component={Link} to="/" sx={{ mr: 2, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}>
  <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
</Typography>

            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button key={page} sx={{ color: 'white', paddingRight: '1rem' }} component={Link} to={`/${page}`}>
                    {page}
                  </Button>
                ))}
              </Box>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={`/${page}`} style={{ textDecoration: 'none', color: 'inherit' }}>{page}</Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Icon />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {setting}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Link to="/bookhotel" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained" style={{ marginRight: '10px' }}>
            Book Hotel
          </Button>
        </Link>
        <Link to="/bookrestaurant" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button variant="contained">
            Book Restaurant
          </Button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
