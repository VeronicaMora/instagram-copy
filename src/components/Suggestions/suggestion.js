import React from 'react'
import useStyles from './styles'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

const Suggestions = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <div className={classes.title}>
                <ListSubheader component="div" id="nested-list-subheader">
                    Sugerencias para ti
                </ListSubheader>
                <Typography className={classes.typography}>Ver todo</Typography>
            </div>
            <div>
                <List className={classes.list}>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                    </ListItem>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                    </ListItem>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Suggestions