import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles'
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader/loader'
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
  const classes = useStyles();
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const login = () => {
    props.login(username, password)
    if(!props.error && username && password) {
      props.history.push('/')
    }
    if(props.loading) {
      return <Loader/>
    }
  }

  const handleChangeU = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeP = (e) => {
    setPassword(e.target.value)
  }

  console.log(props)

  return (
    <div className={classes.container}>
      <Paper className={classes.root}>
        <h1 className={classes.title}>Instagram</h1>
        <div className={classes.inputs}>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              id="outlined-dense"
              label="Usuario o correo electronico"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              onChange={handleChangeU}
              value={username}
            />
            <TextField
              id="outlined-dense"
              label="Contrasena"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              onChange={handleChangeP}
              value={password}
            />
          </form>
          <Button variant="contained" className={classes.button} onClick={login}>
            {props.loading ? <Loader/> : 'Iniciar sesion'}
          </Button>
        </div>
      </Paper>

      <Paper className={classes.regContainer}>
        <Typography className={classes.reg}>
          ¿No tienes una cuenta?   <Link className={classes.link} to="/signup"> Regístrate</Link>
        </Typography>
      </Paper>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { user: state.userReducer }
}

export default withRouter(connect(mapStateToProps, userActions)(Login))