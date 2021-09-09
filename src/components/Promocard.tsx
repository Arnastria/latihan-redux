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
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <img style={{ width: 75 }} src="https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/253f7e7c-8f8f-4a00-8269-8f9fb3d06c6a.png" />
                    {/* <Skeleton width={75} height={25} /> */}
                    <Card elevation={4} raised style={{ position: 'relative', display: 'relative', height: "100%", width: 150, borderRadius: 10 }}>
                        <Grid container direction="column">
                            <Grid item  >
                                <div>
                                    {isHotPromo ?
                                        <>
                                            <div style={{ height: 25 }}>
                                                <div style={{ textAlign: 'center', fontSize: 10, backgroundColor: 'yellowgreen', color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px' }}>
                                                    Hot Promo
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                    {
                                        isHotPromo ?
                                            <Grid container direction="column" style={{ height: 35, fontSize: 13, color: 'yellowgreen', margin: 6 }}>
                                                <Grid item>{title}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{subtitle}</Grid>
                                            </Grid>
                                            :

                                            <Grid container direction="column" justifyContent="center"
                                                alignItems="flex-start" style={{ height: 60, fontSize: 14, color: 'yellowgreen', margin: 6 }}>
                                                <Grid item>{title}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{subtitle}</Grid>
                                            </Grid>
                                    }

                                </div>
                            </Grid>
                            <Grid item >

                                <img style={{ display: 'flex', maxHeight: 150 }} src={image} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0px',
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                    width: '100%'
                                }}>
                                    <img style={{ width: 75, padding: 2 }} src="https://poininngcdn.azureedge.net/smartpromo/Merchant/PromoLogo/cbc09b0d-2907-4a0f-aa15-9735d67b5736.png" />
                                </div>
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