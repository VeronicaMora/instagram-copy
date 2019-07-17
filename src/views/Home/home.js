import React, {Component} from 'react'
import Card from '../../components/Card/card'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Stories from '../../components/Stories/stories'
import Suggestions from '../../components/Suggestions/suggestion'

const Home = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Card/>
            <div className={classes.wrapper}>
                <div className={classes.userWrapper}>
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                        <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                    </Avatar>
                    <div className={classes.div}>
                        <Typography className={classes.username}>usuarioFulanito</Typography>
                        <Typography className={classes.user} color='textSecondary'> Nombre Fulanito</Typography>
                    </div>
                </div>
                <Stories/>
                <div className={classes.suggest}>
                    <Suggestions/>
                </div>
            </div>
        </div>
    )
}

export default Home