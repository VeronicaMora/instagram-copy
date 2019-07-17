import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 293,
        maxHeight: 197,
        width: 293,
        height: 197,
        border: '1px solid #E6E6E6',
        borderRadius: 4,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.background.paper,
    },
    list: {
        // height: '81,61%',
        height: 182,
        maxHeight: 182,
        boxSizing: 'border-box'
    },
    avatar: {
        width: 32,
        height: 32,
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
        marginBottom: 8,
    }
}));

export default useStyles