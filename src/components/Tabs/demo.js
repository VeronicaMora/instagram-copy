import React from 'react';
import { MdGridOn, MdLiveTv, MdBookmarkBorder , MdPortrait} from "react-icons/md";
import InstagramTabs from './tabs';
import useStyles from './styles'
import Post from '../Post/post'

const Demo = () => {
    const [index, setIndex] = React.useState(0);
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <InstagramTabs
                tabs={[
                {
                    label: 'Posts',
                    disableRipple: true,
                    icon: <MdGridOn />,
                },
                { label: 'IGTV', disableRipple: true, icon: <MdLiveTv />},
                {
                    label: 'Saved',
                    disableRipple: true,
                    icon: <MdBookmarkBorder />,
                },
                { label: 'Tagged', disableRipple: true, icon: <MdPortrait />},
                ]}
                value={index}
                onChange={(e, i) => setIndex(i)}
            />
            {index === 0 && <Post/>}
        </div>
    );
}

export default Demo;