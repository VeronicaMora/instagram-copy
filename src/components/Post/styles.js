import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
    img: {
        width: 293,
        height: 293,
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.9
        },
    },
    imgContainer: {
        width: 293,
        height: 293,
        marginRight: 28,
        marginBottom: 28
    },
    root: {
        flexWrap: 'wrap',
        display: 'flex',
        '& div:nth-child(3n+3)': {
            margin: 0
        }
    }
}))

export default useStyles