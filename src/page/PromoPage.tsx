import { makeStyles } from '@material-ui/styles';
import { Grid, createStyles, Theme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import { Promocard } from '../components/Promocard';
import InfiniteScroll from 'react-infinite-scroll-component';
import PoininAppBar from '../components/Appbar';
import { Promocard, PromocardLoading } from '../components/Promocard';
import { DummyPromoDataLong } from '../data/DummyList';
import { PromoData } from '../data/PromoData';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        title: {
            display: 'none',
        },
        search: {
            position: 'relative',
            marginRight: 2,
            marginLeft: 0,
            width: '100%',
        },
        searchIcon: {
            padding: 2,
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: 1,
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${4}px)`,
            width: '100%',
        },
    }),
);

function CardRowLoading() {
    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <PromocardLoading />
        </Grid>);
}

function PromoPage() {
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
                    const tmpArr = dummyPromoData.slice(0, 4);
                    setPromoItem(tmpArr);
                    setHasMore(false);
                    setIsLoading(false);
                }, 1000);
            }
        }
    }

    return (
        <div>
            <div style={{ border: '1px solid #eeecea' }}>
                <PoininAppBar searchFunction={searchFunction} />
            </div>

            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                <Grid item>
                    <div >
                        {isLoading ?
                            <Grid style={{ overflow: 'hidden' }} container justifyContent="center" alignItems="center" spacing={2}>
                                <CardRowLoading />
                                <CardRowLoading />
                                <CardRowLoading />
                                <CardRowLoading />
                            </Grid>
                            :
                            <InfiniteScroll
                                dataLength={promoItem.length}
                                next={() => { fetchData(promoItem.length) }}
                                hasMore={hasMore}
                                loader={
                                    <Grid style={{ overflow: 'hidden', padding: '0% 25% 0% 25%' }} container justifyContent="center" alignItems="center">
                                        <CardRowLoading />
                                        <CardRowLoading />
                                        <CardRowLoading />
                                        <CardRowLoading />
                                    </Grid>
                                }
                                endMessage={
                                    <Grid style={{ overflow: 'hidden', padding: '0% 25% 0% 25%', color: '#6c757d' }} container justifyContent="center" alignItems="center">
                                        <Grid item>
                                            <p>There is no other available product</p>
                                        </Grid>
                                    </Grid>

                                }
                            >
                                <Grid style={{ overflow: 'hidden', padding: '0% 25% 0% 25%' }} container justifyContent="center" alignItems="center">
                                    {promoItem.map((i, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                                                <Promocard promoData={i} />
                                            </Grid>
                                        );
                                    })}

                                </Grid>
                            </InfiniteScroll>
                        }

                    </div>

                </Grid>

            </Grid>
        </div>
    );
}

export { PromoPage };