import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useFooterStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        padding: 20,
        background: '#e4e4e4',
    },
}));

const Footer = () => {
    const classes = useFooterStyles();

    return (
        <footer className={classes.root}>
            Footer
        </footer>
    );
}

export default Footer;