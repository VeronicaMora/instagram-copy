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
                <ListSubheader className={classes.subHeader} component="div" id="nested-list-subheader">
                    Sugerencias para ti
                </ListSubheader>
                <Typography className={classes.typography}>Ver todo</Typography>
            </div>
            <div className={classes.listContainer}>
                <List className={classes.list}>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatarImg} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            classes={{primary: classes.primary, secondary: classes.secondary}}
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                        <h6 color="primary" className={classes.h6}>
                            Seguir
                        </h6>
                    </ListItem>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatarImg} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            classes={{primary: classes.primary, secondary: classes.secondary}}
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                        <h6 color="primary" className={classes.h6}>
                            Seguir
                        </h6>
                    </ListItem>
                    <ListItem classes={{ root: classes.listitem }}>
                        <ListItemAvatar className={classes.listItemAvatar}>
                            <Avatar className={classes.avatar}>
                                <img className={classes.avatarImg} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            className={classes.listItemText}
                            classes={{primary: classes.primary, secondary: classes.secondary}}
                            primary="fulanito"
                            secondary='hace un ratico'
                        />
                        <h6 color="primary" className={classes.h6}>
                            Seguir
                        </h6>
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

export default Suggestions