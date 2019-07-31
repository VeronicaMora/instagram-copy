import React from 'react'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const Stories = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className={classes.div}>
                <div className={classes.container}>
                    <div className={classes.storyContainer}>
                        <Avatar className={classes.avatar}>
                            <img src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                        </Avatar>
                        <Typography className={classes.storyName}>Nombre historia</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories