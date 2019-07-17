import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        // maxWidth: 293,
        // maxHeight: 223,
        width: 293,
        // height: 223,
        border: '1px solid #E6E6E6',
        borderRadius: 4,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        // height: '81,61%',
        height: 182,
        maxHeight: 182,
        overflow: 'auto',
        boxSizing: 'border-box',
        marginTop: 8,
        padding: 0
    },
    avatarBorder: {
        width: 44,
        height: 44,
        background: 'linear-gradient(45deg, #f99b4a 10%, #c92d8c 90%)',
        cursor: 'pointer'
    },
    avatar: {
        width: 34,
        height: 34,
        border: '2px solid white',
        cursor: 'pointer'
    },
    listitem: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        cursor: 'pointer'
    },
    typography: {
        fontSize: 'smaller',
        fontWeight: 500
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4 16',
        height: 27,
        marginTop: 12,
    }
}));

export default useStyles