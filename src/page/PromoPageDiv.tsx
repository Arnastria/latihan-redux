import { makeStyles } from '@material-ui/styles';
import { Grid, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PoininAppBar from '../components/Appbar';
import { Promocard, PromocardLoading } from '../components/Promocard';
import { DummyPromoDataLong } from '../data/DummyList';
import { PromoData } from '../data/PromoData';

const useStyles = makeStyles({
    borderAppBar: {
        border: '1px solid #eeecea'
    },
    gridContainerLoaderPromoNoPadding: {
        overflow: 'hidden', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
    },
    gridContainerLoaderPromo: {
        overflow: 'hidden', padding: '0% 25% 0% 25%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
    },
    gridEndMessage: {
        overflow: 'hidden', padding: '0% 25% 0% 25%', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'
    }
});

function CardRowLoading() {
    return (
        <div style={{ margin: 5 }}>
            <PromocardLoading />
        </div>);
}

function PromoPageDiv() {
    const dummyPromoData = DummyPromoDataLong;
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [promoItem, setPromoItem] = useState<Array<PromoData>>([]);

    useEffect(() => {
        console.log("populate initial data..")

        setPromoItem(dummyPromoData.slice(0, 20))
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])

    const fetchData = (start: any) => {
        console.log("fetchData..")
        console.log(promoItem.length + "/" + dummyPromoData.length);
        if (promoItem.length >= dummyPromoData.length) {
            setHasMore(false);
            console.log("max list reached");
            return;
        }
        setTimeout(() => {
            console.log("getting more data.. [" + start + "]")
            const tmpArr = dummyPromoData.slice(start, start + 8)
            setPromoItem((currentItems) => currentItems.concat(tmpArr));
        }, 1000);
    }

    const searchFunction = (event: KeyboardEvent, query: String) => {
        if (event.key === 'Enter') {
            if (query === '') {
                console.log("empty query")
                setIsLoading(true);
                setTimeout(() => {
                    setHasMore(true);
                    const tmpArr = dummyPromoData.slice(0, 10);
                    setPromoItem(tmpArr);
                    setIsLoading(false);
                }, 1000);
            }
            if (query.length > 3) {
                console.log(query)
                setIsLoading(true);
                setTimeout(() => {
                    const tmpArr = dummyPromoData.slice(0, 6);
                    setPromoItem(tmpArr);
                    setHasMore(false);
                    setIsLoading(false);
                }, 1000);
            }
        }
    }

    return (
        <div >
            <div className={classes.borderAppBar}>
                <PoininAppBar searchFunction={searchFunction} />
            </div>

            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <div>
                        {isLoading ?
                            <div className={classes.gridContainerLoaderPromoNoPadding}>
                                <CardRowLoading />
                                <CardRowLoading />
                                <CardRowLoading />
                                <CardRowLoading />
                            </div>
                            :
                            <InfiniteScroll
                                dataLength={promoItem.length}
                                next={() => { fetchData(promoItem.length) }}
                                hasMore={hasMore}
                                loader={
                                    <div className={classes.gridContainerLoaderPromo} >
                                        <CardRowLoading />
                                        <CardRowLoading />
                                        <CardRowLoading />
                                        <CardRowLoading />
                                    </div>
                                }
                                endMessage={
                                    <div className={classes.gridEndMessage}>
                                        <Grid item>
                                            <p>There is no other available product</p>
                                        </Grid>
                                    </div>
                                }
                            >
                                <div className={classes.gridContainerLoaderPromo} >
                                    {promoItem.map((i, index) => {
                                        return (
                                            <div style={{ margin: 10 }} key={index}>
                                                <Promocard promoData={i} />
                                            </div>
                                        );
                                    })}
                                </div>
                            </InfiniteScroll>
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export { PromoPageDiv };