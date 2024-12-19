import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';

// Helper component NavText local to the file to prevent repeated code
function NavText({ href, text, isMain }) {
  return (
    <Typography
    //   variant={isMain ? 'h5' : 'h7'}  // include if using special text to lead to home
      noWrap
      style={{
        marginRight: '20px',
        fontFamily: 'calibri light, sans-serif',
        fontWeight: 700,
        letterSpacing: '.2rem',
      }}
    >
      <NavLink
        to={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}>
        {text}
      </NavLink>
    </Typography>
  )
}

// Navbar using MUI
export default function NavBar() {
  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NavText href='/' text='HOME' isMain />
          <NavText href='/resume' text='RESUME' />
          <NavText href='/projects' text='PROJECTS' />
          <NavText href='/contact' text='CONTACT' />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
