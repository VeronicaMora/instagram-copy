import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        // justifyContent: 'center',
        overflow: 'hidden',
        padding: '0 207px'
    },
    avatar: {
        width: 50,
        height: 50,
        cursor: 'pointer'
    },
    wrapper: {
        marginLeft: 28,
        position: 'fixed',
        left: 803,
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