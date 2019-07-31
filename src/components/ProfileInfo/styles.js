import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    avatar: {
        width: 150,
        height: 150,
        border: '1px solid #ebebeb',
        cursor: 'pointer',
        boxSizing: 'border-box',
    },
    avatarImg: {
        width: 150,
        height: 150,
    },
    avatarCont: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    avatarWrapper: {
        marginRight: 30,
        width: 291.67
    },
    button: {
        // margin: theme.spacing(1),
        fontSize: 14,
        fontWeight: 600,
        textTransform: 'none',
        textDecoration: 'none',
        height: 33,
    },
    link: {
        textDecoration: 'none',
        width: 113.23,
        height: 30,
        marginLeft: 20
    },
    settings: {
        display: 'flex',
        marginBottom: 20,
        height: 40,
        alignItems: 'center'
    },
    iconSettings: {
        width: 30,
        height: 30
    },
    iconDiv: {
        width: 40,
        height: 40,
        marginLeft: 5
    },
    container: {
        display: 'flex',
        // justifyContent: 'center',
        width: 935,
        marginBottom: 44
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    },
    info: {
        display: 'flex',
        height: 18,
        marginBottom: 20,
        alignItems: 'center'
    },
    username: {
        fontSize: 26,
        fontWeight: 300,
    },
    pubSeguidores: {
        marginRight: 40,
        fontSize: 15,
        fontWeight: 100
    },
    seguidos: {
        fontSize: 15,
        fontWeight: 100
    },
    name: {
        fontSize: 15,
        fontWeight: 'bolder',
        margin: 0
    },
    biography: {
        fontSize: 15,
        fontWeight: 100,
        margin: 0,
        height: 21,
        display: 'flex',
        alignItems: 'flex-end'
    },
}))

export default useStyles