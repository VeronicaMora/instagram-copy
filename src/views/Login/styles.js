import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: 350,
        border: '1px solid #e6e6e6',
        borderRadius: 1,
        margin: '0 0 10px',
        padding: '10px 0',
        boxShadow: 'none'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 12
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: '#fafafa',
        borderColor: '#efefef',
        width: 268,
        height: 38,
        margin: '0 40px 10px !important',
        fontSize: 14
    },
    dense: {
        marginTop: theme.spacing(2),
    },
    title: {
        height: 51,
        width: 175,
        margin: '22px auto 12px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily:'Cookie',
        fontSize: '-webkit-xxx-large'
    },
    inputs: {
        display: 'inline-block',
        textAlign: 'center'
    },
    form: {
        marginTop: 24,
    },
    button: {
        backgroundColor: '#3897f0',
        color: 'white',
        boxShadow: 'none',
        margin: '8px 40px',
        width: 268,
        height: 30,
        textTransform: 'none',
        padding: '5px 9px'
    },
    regContainer: {
        width: 350,
        backgroundColor: '#fff',
        border: '1px solid #e6e6e6',
        borderRadius: 1,
        margin: '0 0 10px',
        padding: '10px 0',
        boxShadow: 'none'
    },
    link: {
        textDecoration: 'none',
        color: '#3897f0',
        fontWeight: 600
    },
    reg: {
        fontSize: 14,
        display: 'flex',
        justifyContent: 'center',
        margin: 15

    }
}));

export default useStyles