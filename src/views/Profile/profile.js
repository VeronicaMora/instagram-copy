import React, {useEffect} from 'react'
import useStyles from './styles'
import Stories from '../../components/Stories/stories'
import ProfileInfo from '../../components/ProfileInfo/profileInfo'
import Tabs from '../../components/Tabs/demo'
// import Post from '../../components/Post/post'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import isEmpty from 'lodash/isEmpty'

const Profile = (props) => {
    const classes = useStyles()

    useEffect(
        () => {
            if(isEmpty(props.user)) {
                props.history.push('/login')
            }
            console.log('holis')
        }
    )
    
    return (
        <div className={classes.root}>
            <div>
                <ProfileInfo/>
            </div>
            <div>
                <Stories/>
            </div>
            <div>
                <Tabs/>
            </div>
            {/* <div>
                <Post/>
            </div> */}
        </div>
    )
}

const mapstateToProps = (state) => {
    return { user: state.userReducer.user }
}

export default withRouter(connect(mapstateToProps)(Profile))