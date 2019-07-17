import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    avatar: {
        width: 50,
        height: 50,
    },
    wrapper: {
        marginLeft: 28,
    },
    userWrapper: {
        display: 'flex',
        marginBottom: 16,
        paddingLeft: 5,
    },
    username: {
        fontSize: 'smaller',
        fontWeight: 500
    },
    user: {
        fontSize: 'smaller'
    },
    div: {
        marginLeft: 14,
    },
    suggest: {
        marginTop: 12
    }
}))

export default useStyles