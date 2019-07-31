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
        // height: 182,
        // maxHeight: 182,
        overflow: 'auto',
        boxSizing: 'border-box',
        padding: '0 !important'
    },
    avatar: {
        width: 32,
        height: 32,
        cursor: 'pointer',
        border: '1px solid #ebebeb',
        marginRight: 12,
        boxSizing: 'border-box'
    },
    avatarImg: {
        width: 32,
        height: 32,
        cursor: 'pointer',
    },
    listitem: {
        height: 48,
    },
    listItemAvatar: {
        minWidth: 0
    },
    listItemText: {
        height: 28,
        margin: 0
    },
    primary: {
        fontSize: 'small',
        fontWeight: 500,
        cursor: 'pointer'
    },
    secondary: {
        fontSize: 12
    },
    typography: {
        fontSize: 'smaller',
        fontWeight: 500
    },
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '4px 16px',
        height: 19,
        marginTop: 12,
    },
    subHeader: {
        padding: '0 !important'
    },
    listContainer: {
        paddingBottom: 8,
        marginLeft: 4,
        marginBottom: 4,
    },
    h6: {
        color: '#3897f0',
        margin: 0,
        cursor: 'pointer'
    }
}));

export default useStyles