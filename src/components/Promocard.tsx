import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

function PromocardLoading(props: any) {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div>
                    <Skeleton width={75} height={25} />
                    <Card elevation={4} raised style={{ width: 150, borderRadius: 10 }}>
                        <Grid container direction="column">
                            <Grid item  >
                                <Skeleton width={'100%'} height={25} />
                                <Skeleton width={'100%'} height={25} />
                            </Grid>
                            <Grid item >
                                <div style={{ margin: 0, display: 'flex' }}>
                                    <Skeleton width={'100%'} height={150} />
                                </div>
                            </Grid>
                        </Grid>
                    </Card>
                    <Skeleton width={75} height={25} />
                </div>
            </Grid>
        </Grid>);
}

function Promocard(props: any) {
    const { name, isHotPromo, title, subtitle, days, image } = props;
    console.log(name)
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <img style={{ width: 75 }} src="https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/253f7e7c-8f8f-4a00-8269-8f9fb3d06c6a.png" />
                    {/* <Skeleton width={75} height={25} /> */}
                    <Card elevation={4} raised style={{ height: "100%", width: 150, borderRadius: 10 }}>
                        <Grid container direction="column">
                            <Grid item  >
                                <div >
                                    {isHotPromo ?
                                        <div style={{ textAlign: 'center', fontSize: 10, backgroundColor: 'yellowgreen', color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px' }}>
                                            Hot Promo
                                        </div>
                                        :
                                        <div style={{ textAlign: 'center', fontSize: 10, backgroundColor: 'white', color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px' }}>
                                            Hot Promo
                                        </div>
                                    }
                                    <div style={{ fontSize: 13, color: 'yellowgreen', margin: 6 }}>
                                        <div>{title}</div>
                                        <div style={{ fontWeight: 'bold' }}>{subtitle}</div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item >

                                <img style={{ display: 'flex', maxHeight: 150 }} src={image} />
                                {/* <div style={{ display: 'flex', textAlign: 'center', fontSize: 10, backgroundColor: 'yellowgreen', color: 'white', maxWidth: '50%' }}>
                                    Hot Promo
                                </div> */}
                                {/* <Skeleton style={{ margin: 0 }} height={100} /> */}
                            </Grid>
                        </Grid>
                    </Card>
                    <div style={{ fontSize: 13 }}>
                        {days} Days Left
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export { Promocard, PromocardLoading };