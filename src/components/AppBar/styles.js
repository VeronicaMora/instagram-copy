import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    grow: {
        // flexGrow: 1,
        maxWidth: 1349,
        height: '100%',
        marginBottom: 59
    },
    header: {
        backgroundColor: '#FFFFFF',
        color: 'black',
        boxShadow: 'none',
        borderBottom: '1px solid #E6E6E6',
        width: '100vw',
        // height: '100%',
        height: 77,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 169.5px'
    },
    title: {
        display: 'none',
        fontFamily: 'Cookie',
        fontWeight: 700,
        fontSize: 'xx-large',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        cursor: 'pointer'
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.white, 0.15),
        marginRight: theme.spacing(2),
        marginLeft: 0,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
        backgroundColor: '#FAFAFA',
        border: '1px solid #DBDBDB',
        display: 'flex',
        justifyContent: 'center',
        width: 215,
        height: 28
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#A5A7AA',
        fontSize: 'small'
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
        // width: 1010
    },
    headerTitle: {
        display: 'flex',
        alignItems: 'center'
    },
    insticon: {
        width: 24,
        height: 24,
        paddingRight: 40,
        cursor: 'pointer'
    },
    placeholder: {
        fontSize: 'small',
        marginLeft: 5
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
}));

export default useStyles