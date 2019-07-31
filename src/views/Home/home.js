import React, {useEffect} from 'react'
import Card from '../../components/Card/card'
import useStyles from './styles'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StoriesList from '../../components/StoriesList/storiesList'
import Suggestions from '../../components/Suggestions/suggestion'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'

const Home = (props) => {
    useEffect(
        () => {
            if(isEmpty(props.user)) {
                props.history.push('/login')
            }
            console.log(props.user)
        }
    )

    const classes = useStyles()

    const goToProfile = () => {
        props.history.push('/profile')
    }
    return (
        <div className={classes.root}>
            <Card/>
            <div>
                <div className={classes.wrapper}>
                    <div className={classes.userWrapper}>
                        <Avatar onClick={goToProfile} aria-label="Recipe" className={classes.avatar}>
                            <img className={classes.avatar} src={`https://www.gravatar.com/avatar/?d=identicon`} alt="avatar"></img>
                        </Avatar>
                        <div className={classes.div}>
                            <Typography 
                                className={classes.username}
                                onClick={goToProfile}
                            >
                                usuarioFulanito
                            </Typography>
                            <Typography className={classes.user} color='textSecondary'> Nombre Fulanito</Typography>
                        </div>
                    </div>
                    <StoriesList/>
                    <div className={classes.suggest}>
                        <Suggestions/>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.userReducer.user}
}

export default withRouter(connect(mapStateToProps)(Home))