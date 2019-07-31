import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: 77,
        height: 77,
        border: '3px solid white',
        cursor: 'pointer',
        boxShadow: '0px 0px 0px 1px #ebebeb',
    },
    avatarImg: {
        width: 77,
        height: 77,
        cursor: 'pointer'
    },
    storyName: {
        paddingTop: 15,
        fontSize: 12,
        fontWeight: 500
    },
    storyContainer: {
        padding: '10px 15px',
    },
    container: {
        marginLeft: 10,
        width: 120,
        height: 130
    },
    div: {
        paddingLeft: 14,
        paddingRight: 24
    },
    root: {
        width: 935,
        marginBottom: 44
    }
}))

export default useStyles