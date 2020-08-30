import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Link } from '@material-ui/core';
import Logo from 'assets/logo.png'

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em',
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em',
    },
  },
  logo: {
    height: '7rem',
    [theme.breakpoints.down('md')]: {
      height: '6rem',
    },
    [theme.breakpoints.down('xs')]: {
      height: '86.5px',
    },
  },
  logoContainer: {
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  appbar: {
    zIndex: 1299,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar disableGutters>
          <Button
            component={Link}
            href="/"
            disableRipple
            onClick={() => props.setValue(0)}
            className={classes.logoContainer}
          >
            <img src={Logo} alt="logo" className={classes.logo} />
          </Button>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
