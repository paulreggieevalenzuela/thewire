import React, { useEffect, useState, useContext, useRef } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player/lazy';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// Constants & Context
import AppContext from '../../context';
import { DATE_FORMAT } from '../../constants';

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
            height: 400,

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
        background: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
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
        marginBottom: 15,

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
    spinner: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

const Videos = () => {
    const classes = useGroupStyles();

    const [videos, setVideos] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setLoading] = useState(false);

    const [grid] = useContext(AppContext);
    const loader = useRef(null);

    const infiniteScrollOptions = {
        root: null,
        rootMargin: '100px',
        threshold: 1.0
    };

    const params = {
        offset: 0,
        max: page <= 1 ? 12 : 1,
        sort: 'latest',
        theWire: true,
        trending: false,
    };

    const browseVideos = async () => {
        setLoading(true);
        const config = {
            method: 'GET',
            url: '/api/public/videos',
            params,
        };

        await axios(config)
            .then((resp) => {
                setVideos([ ...videos, ...resp.data.result ]);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                console.log(err);
            });
    };

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting && !isLoading) {   
            setPage((page) => page + 1)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(handleObserver, infiniteScrollOptions);
         if (loader.current) observer.observe(loader.current)
    }, []);

    useEffect(() => {
        browseVideos();
    }, [page])

    return (
        <section className={classes.root}>
            {videos?.map((video, i) => 
                <div key={i} className={classes.cardContainer}>
                    <div>
                        <h3 className={classes.cardTitle}>
                            {video.title}
                        </h3>
                        <ul className={classes.videoDataList}>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Date Added:</p>
                                <p className={classes.videoListItemDetail}>{moment(video.signedDate).format(DATE_FORMAT)}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Date Posted:</p>
                                <p className={classes.videoListItemDetail}>{moment(video.when).format(DATE_FORMAT)}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Views:</p>
                                <p className={classes.videoListItemDetail}>{video.views}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>Location:</p>
                                <p className={classes.videoListItemDetail}>{video.location}</p>
                            </li>
                            <li className={classes.videoListItem}>
                                <p className={classes.videListItemTitle}>JV#:</p>
                                <p className={classes.videoListItemDetail}>{video.jmId}</p>
                            </li>
                        </ul>
                    </div>
                    <div className={classes.videoContainer}>
                        <ReactPlayer 
                            url={video.videoUrl}
                            width="100%"
                            height="auto"
                        />
                    </div>
                </div>
            )}
            <div className={classes.spinner} ref={loader}>
                {isLoading && (
                    <CircularProgress />
                )}
            </div>
        </section>
    );
}


export default Videos;