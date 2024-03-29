import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import useStyles from './styles'
import { FiSearch, FiUser, FiHeart, FiInstagram /*FiBookmark, FiMessageCircle*/ } from "react-icons/fi";
import { withRouter } from 'react-router-dom'

const NavBar = (props) => {
  const classes = useStyles();
  
  const goToHome = () => {
    props.history.push('/')
  }

  const goToProfile = () => {
    props.history.push('/profile')
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header} position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.headerTitle}>
            <FiInstagram className={classes.insticon} onClick={goToHome}/>
            <Typography className={classes.title} onClick={goToHome} variant="h6" noWrap>
              Instagram
            </Typography>
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <FiSearch />
              <Typography className={classes.placeholder}>Buscar</Typography>
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="Show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <FiHeart />
              </Badge>
            </IconButton>
            <IconButton
              onClick={goToProfile}
            >
              <FiUser />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(NavBar);