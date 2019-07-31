import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles'
import Button from '@material-ui/core/Button';
import { IoIosSettings } from "react-icons/io";
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

const Profile = () => {
    const classes = useStyles()
    
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <div className={classes.avatarWrapper}>
                    <div className={classes.avatarCont}>
                        <Avatar className={classes.avatar}>
                            <img className={classes.avatarImg} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                        </Avatar>
                    </div>
                </div>
                <div>
                    <div className={classes.settings}>
                        <Typography className={classes.username}>marigalvis6 (username)</Typography>
                        <Link className={classes.link} to=''>
                            <Button variant="outlined" className={classes.button}>
                                Editar perfil
                            </Button>
                        </Link>
                        <div className={classes.iconDiv}>
                            <IoIosSettings className={classes.iconSettings}/>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <h5 className={classes.pubSeguidores}>publicaciones</h5>
                        <h5 className={classes.pubSeguidores}>seguidores</h5>
                        <h5 className={classes.seguidos}>seguidos</h5>
                    </div>
                    <div>
                        <h5 className={classes.name}>Fulanito</h5>
                        <h5 className={classes.biography}>biografia</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile