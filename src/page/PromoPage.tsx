import { makeStyles } from '@material-ui/styles';
import { AppBar, CircularProgress, Grid, InputBase, Toolbar, Typography, createStyles, Theme, } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
// import { Promocard } from '../components/Promocard';
import InfiniteScroll from 'react-infinite-scroll-component';
import PoininAppBar from '../components/Appbar';
import { Promocard, PromocardLoading } from '../components/Promocard';

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
    const classes = useStyles();
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [items, setItems] = useState<Array<{
        isHotPromo: boolean,
        title: string,
        subtitle: string,
        days: string,
        image: string
    }>>([]);

    useEffect(() => {
        console.log("populate initial data..")
        const tmpArr: {
            isHotPromo: boolean,
            title: string,
            subtitle: string,
            days: string,
            image: string
        }[] = [];
        for (let i = 0; i < 20; i++) {
            tmpArr.push({
                isHotPromo: true,
                title: "product " + i,
                subtitle: "1" + i + "0 K",
                days: "" + i,
                image: "https://poininngcdn.azureedge.net/smartpromo/Promo/Background/f248e1cf-41b2-4e5d-97ea-258c3eecc47f.jpg"
            })
        }
        setItems((currentItems) => currentItems.concat(tmpArr));
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])


    const fetchData = (start: any) => {
        console.log("fetchData..")
        if (items.length >= 50) {
            setHasMore(false);
            console.log("max list reached");
            return;
        }
        setTimeout(() => {
            console.log("getting more data.. [" + start + "]")
            const tmpArr: {
                isHotPromo: boolean,
                title: string,
                subtitle: string,
                days: string,
                image: string
            }[] = [];
            for (let i = start; i <= start + 10; i++) {
                tmpArr.push({
                    isHotPromo: true,
                    title: "product " + i,
                    subtitle: "1" + i + "0 K",
                    days: "" + i,
                    image: "https://poininngcdn.azureedge.net/smartpromo/Promo/Background/f248e1cf-41b2-4e5d-97ea-258c3eecc47f.jpg"
                })
            }

            setItems((currentItems) => currentItems.concat(tmpArr));
        }, 1000);
    }

    const searchFunction = (event: KeyboardEvent, query: String) => {
        if (event.key === 'Enter') {
            console.log(query)
        }
        // if (query.length > 3) {
        //     console.log(query);
        // }
    }

    console.log(items.length)
    return (
        <div>
            <div style={{ border: '1px solid #eeecea' }}>
                <PoininAppBar searchFunction={searchFunction} />
            </div>

            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                {/* <Promocard /> */}
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
                                dataLength={items.length}
                                next={() => { fetchData(items.length) }}
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
                                    {items.map((i, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} md={4} xl={3} key={index}>
                                                <Promocard
                                                    isHotPromo={index % 2 == 0}
                                                    title={"Product ke" + index}
                                                    subtitle={"10" + index + "K"}
                                                    days={index}
                                                    image={index % 2 == 0 ?
                                                        "https://poininngcdn.azureedge.net/smartpromo/Promo/Background/f248e1cf-41b2-4e5d-97ea-258c3eecc47f.jpg" :
                                                        "https://poininngcdn.azureedge.net/smartpromo/Promo/Background/1898ffcc-cf04-4209-a67d-3d82ecdca491.jpg"}

                                                />
                                            </Grid>
                                        );
                                    })}

                                </Grid>

                                {/* {items.map((i, index) => {
                        return (
                            <div style={{ border: '1px solid green', margin: 30, padding: 10 }} key={index}>
                                {i.title} - {index}
                            </div>);
                    })} */}
                            </InfiniteScroll>
                        }

                    </div>

                </Grid>

            </Grid>
        </div>
    );
}

export { PromoPage };