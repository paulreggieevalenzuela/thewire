import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy'

import AppContext from '../../context';

import { makeStyles } from '@material-ui/core/styles';

const useGroupStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        width: '100%',
        maxWidth: 1100,
        padding: '0 15px',
        margin: '50px auto',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'column-reverse',
        background: '#fff',
        padding: '10px 20px',
        boxShadow: 'rgb(51 51 51 / 33%) 0px 0px 7px 0px',
        width: '100%',
        maxWidth: 400,
        margin: '0 auto 20px',
        [theme.breakpoints.up('md')]: {
            maxWidth: 'unset',
            flexDirection: 'row',

            '& > div': {
                flex: 1,
            }
        },
    },
    cardTitle: {
        color: 'rgb(240, 79, 56)',
        fontSize: 18,
        fontWeight: 400,
        margin: '15px 0',
    },
    videoContainer: {
        position: 'relative',
    },
    videoOverlay: {
        background: 'rgba(0,0,0,0.5)',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    videoDataList: {
        padding: 0,
        margin: 0,
        listStyle: 'none',
        width: 300,
    },
    videoListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

        '&:last-child': {
            marginBottom: 40,
        },
    },
    videListItemTitle: {
        fontWeight: 600,
        fontSize: 16,
        margin: 0,
    },
    videoListItemDetail: {
        fontWeight: 400,
        fontSize: 16,
        margin: 0,
    },
}));

const Videos = () => {
    const classes = useGroupStyles();
    const [videos, setVideos] = useState([]);
    const [grid] = useContext(AppContext);

    useEffect(() => {
        const browseVideos = async () => {
            const config = {
                method: 'GET',
                url: 'http://api.tvmaze.com/schedule/web?date=2020-05-29&country=US',
                headers: { }
            };
            await axios(config)
                .then((response) => {
                    setVideos(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        browseVideos()
    }, []);

    const containerStyles = {
        display: 'flex',
        flexDirection: grid.grid === 'list' ? 'column' : 'row',
        flexWrap: grid.grid === 'list' ? 'no-wrap' : 'wrap',
    };

    const cardContainerStyle = {
        flexDirection: grid.grid === 'list' ? 'row' : 'column-reverse',
        width: grid.grid === 'list' ? '100%' : '33%',
    };

    return (
        <section className={classes.root} style={containerStyles}>
            {videos?.map((video, i) => 
                <div key={i} style={cardContainerStyle} className={classes.cardContainer}>
                    <div>
                        <h3 className={classes.cardTitle}>
                            {video.name}
                        </h3>
                        <ul className={classes.videoDataList}>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Date Added:</p>
                                <p className={classes.videoListItemDetail}>{video.airdate}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Date Posted:</p>
                                <p className={classes.videoListItemDetail}>{video.airdate}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Views:</p>
                                <p className={classes.videoListItemDetail}>{video.number}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Location:</p>
                                <p className={classes.videoListItemDetail}>N/A</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>JV#:</p>
                                <p className={classes.videoListItemDetail}>{video.id}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.videoContainer}>
                        <div className={classes.videoOverlay} />
                        <ReactPlayer 
                            url='https://www.youtube.com/watch?v=2B5rbsOoIUE' // Need to change URL from the API Request
                            width="100%"
                            height="100%"
                            controls={false}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}


export default Videos;