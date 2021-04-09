import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useClockStyles = makeStyles((theme) => ({
    root: {
        background: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        },
    },
    timer: {
        fontWeight: 100,
        fontSize: 30,
        color: 'rgb(240, 79, 56)',
        letterSpacing: 2,
        [theme.breakpoints.up('md')]: {
            borderRight: '2px solid grey',
            paddingRight: 15,
        },
    },
    wholeDate: {
        color: 'rgb(98, 98, 98)',
        fontSize: 14,
        fontWeight: 700,
        textAlign: 'center',
        textTransform: 'uppercase',
        [theme.breakpoints.up('md')]: {
            paddingLeft: 15,
            fontSize: 30,
        },
    },
}));

const Clock = () => {
    const classes = useClockStyles();
    const [date, setDate] = useState(new Date());
    const dateToday = moment().format('dddd DD MMMM YYYY');
    
    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(timerID);
        };
    });
   
    const tick = () => {
        setDate(new Date());
    }

    return (
        <section className={classes.root}>
            <div className={classes.timer}>{date.toLocaleTimeString()}</div>
            <div className={classes.wholeDate}>{dateToday}</div>
        </section>
    )
}

export default Clock;