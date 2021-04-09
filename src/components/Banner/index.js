import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const BANNER_IMAGE = "https://cdn.thewire.in/wp-content/uploads/2019/12/26115203/science-in-hd-9kSTF9PvETM-unsplash.jpg";

const useBannerStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: 425,
        backgroundSize: 'cover',
        backgroundImage: `url(${BANNER_IMAGE})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.up('md')]: {
            backgroundPosition: '50% 50%',
        },
    },
    layer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        maxHeight: 425,
    },
    bannerSub: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',
        padding: '15px 10px',
        textAlign: 'center',
        '& > p': {
            fontSize: 15,
            fontWeight: 'normal',
            margin: 0,
        },
        '& span': {
            textDecoration: 'underline',
        }
    },
    base: {},
    action: {},
}));

const Banner = () => {
    const classes = useBannerStyles();

    return (
        <section className={classes.root}>
            <div className={classes.layer} />
            <div className={classes.bannerSub}>
                <p>A real-time feed display <span>every new video</span> the moment it's available for licensing</p>
            </div>
        </section>
    );
}


export default Banner;