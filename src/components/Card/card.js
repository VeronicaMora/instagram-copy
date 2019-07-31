import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useStyles from './styles'
import { /*FiSearch, FiUser, FiHeart, FiInstagram, FiBookmark,*/ FiMessageCircle } from "react-icons/fi";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FaHeart, FaRegHeart, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { withRouter } from 'react-router-dom'

const CardComponent = (props) => {
    const classes = useStyles();

     const goToProfile = () => {
        props.history.push('/profile')
    }
 
    return (
        <Card className={classes.card}>
            <div className={classes.headerContainer}>
                <CardHeader
                    className={classes.header}
                    avatar={
                        <Avatar className={classes.avatarBorder}>
                            <Avatar aria-label="Recipe" className={classes.avatar}>
                                <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                            </Avatar>
                        </Avatar>
                    }
                    // action={
                        
                    // }
                    title="Shrimp and Chorizo Paella"
                    subheader="September 14, 2016"
                    onClick={goToProfile}
                />
                <IconButton aria-label="Settings">
                    <MoreVertIcon />
                </IconButton>
            </div>

            <div className={classes.mediaContainer}>
                <CardMedia
                    className={classes.media}
                    // component='image'
                    image="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2017/06/moist-chocolate-cupcakes-5.jpg"
                />
            </div>
            <CardActions className={classes.iconsContainer} disableSpacing>
                <div /*</CardActions>className={classes.icon}*/>
                    <FormControlLabel 
                        style={{margin: 0}}
                        control={<Checkbox icon={<FaRegHeart />} checkedIcon={<FaHeart />} value="checkedH" />}
                    />
                    <IconButton aria-label="Share">
                        <FiMessageCircle />
                    </IconButton>
                </div>
                <FormControlLabel
                    style={{margin: 0}}
                    control={<Checkbox icon={<FaRegBookmark />} checkedIcon={<FaBookmark color='black'/>} value="checkedH"/>}
                />
            </CardActions>
            <CardContent>
                <div className={classes.likes}>
                    <Avatar aria-label="Recipe" className={classes.anotherAvatar}>
                        <img className={classes.anotherAvatarImg} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                    </Avatar>
                    <Typography variant="body2" component="p">
                        Les gusta a
                    </Typography>
                </div>
                <Typography className={classes.fulano} variant="body2" component="p">
                    fulanito
                </Typography>
            </CardContent>
        </Card>
    );
}

export default withRouter(CardComponent)