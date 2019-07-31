import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './styles'
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import Divider from '@material-ui/core/Divider';
import * as userActions from '../../actions/userActions'
import { connect } from 'react-redux'
import Loader from '../../components/Loader/loader'

const SignUp = (props) => {
    const classes = useStyles();
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [name, setName] = React.useState('')

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const signup = () => {
        props.signup(email, name, username, password)
        if(!props.user.error && email && name && username && password){
            props.history.push('/')
        }
        if(props.loading) {
            return <Loader/>
        }
    }

    return (
        <div className={classes.container}>
            <Paper className={classes.root}>
                <h1 className={classes.title}>Instagram</h1>
                <div className={classes.inputs}>
                    <div className={classes.dividerContainer}>
                        <Divider className={classes.divider}/>O<Divider className={classes.divider}/>
                    </div>
                    <form className={classes.form} noValidate autoComplete="off">
                        <TextField
                            id="outlined-dense"
                            label="correo electronico"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                            onChange={handleChangeEmail}
                            value={email}
                        />
                        <TextField
                            id="outlined-dense"
                            label="Nombre completo"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                            onChange={handleChangeName}
                            value={name}
                        />
                        <TextField
                            id="outlined-dense"
                            label="Nombre de usuario"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                            onChange={handleChangeUsername}
                            value={username}
                        />
                        <TextField
                            id="outlined-dense"
                            label="Contrasena"
                            className={clsx(classes.textField, classes.dense)}
                            margin="dense"
                            variant="outlined"
                            onChange={handleChangePassword}
                            value={password}
                        />
                    </form>
                    <Button variant="contained" className={classes.button} onClick={signup}>
                        Iniciar sesion
                    </Button>
                </div>
            </Paper>

            <Paper className={classes.regContainer}>
                <Typography className={classes.reg}>
                    ¿Tienes una cuenta? <Link className={classes.link} to="/login"> Inicia sesion</Link>
                </Typography>
            </Paper>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { user: state.userReducer }
}

export default connect(mapStateToProps, userActions)(SignUp)