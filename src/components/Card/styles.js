import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 614,
        minWidth: 483,
        maxHeight: 1100,
        boxShadow: 'none',
        border: '1px solid #E6E6E6',
        boxSizing: 'border-box',
        marginBottom: 30,
        [theme.breakpoints.down('lg')]: {
            width: '100%'
        }
    },
    header: {
        height: 60,
        paddingTop: 0,
        paddingBottom: 0,
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontWeight: 500,
        fontSize: 'small',
    },
    media: {
        height: 0,
        width: '100%',
        paddingTop: '56.25%', // 16:9
    },
    avatarBorder: {
        width: 42,
        height: 42,
        background: 'linear-gradient(45deg, #f99b4a 10%, #c92d8c 90%)',
        cursor: 'pointer'
    },
    avatar: {
        width: 32,
        height: 32,
        border: '2px solid white',
        cursor: 'pointer'
    },
    iconsContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    likes: {
        display: 'flex',
        marginBottom: 10
    },
    anotherAvatar: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    anotherAvatarImg: {
        width: 20,
        height: 20,
    },
    fulano: {
        fontWeight: 500
    },
}));

export default useStyles