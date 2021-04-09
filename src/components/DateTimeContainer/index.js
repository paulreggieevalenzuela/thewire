import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppsIcon from '@material-ui/icons/Apps';
import ViewListIcon from '@material-ui/icons/ViewList';

import Clock from '../Clock';
import AppContext from '../../context';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '15px',
        transition: 'all 1s ease-in-out',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
        },
    },
    actions: {
        display: 'none',
        '& span': {
            marginRight: 10,

            '&:last-child': {
                marginRight: 0
            }
        },
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    }
}));

const DateTimeContainer = () => {
    const classes = useStyles();
    const [data, setData] = useContext(AppContext);

    return (
        <section className={classes.root}>
            <Clock />
            <div className={classes.actions}>
                <span onClick={() => setData({...data, grid: 'list'})}>
                    <ViewListIcon fontSize="large" color={data.grid === "list" ? "primary" : "inherit"}/>
                </span>
                <span onClick={() => setData({...data, grid: 'table'})}>
                    <AppsIcon fontSize="large" color={data.grid === "table" ? "primary" : "inherit"} />
                </span>
            </div>
        </section>
    )
}

export default DateTimeContainer;