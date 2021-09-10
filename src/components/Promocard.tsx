import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { PromoData } from '../data/PromoData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    skeletonMerchantLogo: {
        borderRadius: '5px', width: '50%', display: 'flex'
    },
    skeletonMerchantBackground: {
        height: '100%', width: '100%', display: 'flex', minHeight: 150
    },
    skeletonDays: {
        width: '50', height: 25,
    },
    cardProduct: {
        position: 'relative', display: 'relative', height: "100%", width: 150, borderRadius: 10,
    },
    hotPromo: (props: PromoData) => ({
        textAlign: 'center', fontSize: 10, backgroundColor: props.Color, color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px'
    }),
    titleRowNoPromo: (props: PromoData) => ({
        height: 60, fontSize: 14, color: props.Color, margin: 6
    }),
    titleRowPromo: (props: PromoData) => ({
        height: 35, fontSize: 12, color: props.Color, margin: 6
    }),
    backgroundProduct: {
        display: 'flex', maxHeight: 150
    },
    overlayCard: {
        position: 'absolute',
        bottom: '0px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        width: '100%'
    },
    cardProductLogo: {
        width: '50%', padding: 2
    }
});


function PromocardLoading(props: any) {
    const classes = useStyles(props);
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <Skeleton variant="rect" className={classes.skeletonMerchantLogo} />
                    </div>

                    <Card elevation={4} raised className={classes.cardProduct}>
                        <div style={{ height: 60, margin: 6 }} />
                        <Skeleton variant="rect" className={classes.skeletonMerchantBackground} />
                    </Card>
                    <div style={{ fontSize: 12 }}>
                        <Skeleton className={classes.skeletonDays} />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const Promocard = (props: any) => {
    const { promoData } = props;
    const classes = useStyles(promoData);
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <img style={{ width: 75 }} src={promoData.MerchantLogo} />
                    </div>

                    <Card elevation={4} raised className={classes.cardProduct}>
                        <Grid container direction="column">
                            <Grid item  >
                                <div>
                                    {promoData.ShowHotPromo ?
                                        <>
                                            <div style={{ height: 25 }}>
                                                <div className={classes.hotPromo}>
                                                    Hot Promo
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                    {
                                        promoData.ShowHotPromo ?
                                            <Grid container direction="column" className={classes.titleRowPromo}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                            :

                                            <Grid container direction="column" justifyContent="center"
                                                alignItems="flex-start" className={classes.titleRowNoPromo}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                    }

                                </div>
                            </Grid>
                            <Grid item >

                                <img className={classes.backgroundProduct} src={promoData.Background} />
                                {promoData.CardLogo != '' ?
                                    <div className={classes.overlayCard}>
                                        <img className={classes.cardProductLogo} src={promoData.CardLogo} />
                                    </div>
                                    :
                                    <></>
                                }
                            </Grid>
                        </Grid>
                    </Card>
                    <div style={{ fontSize: 12 }}>
                        {promoData.Day}
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}
export { Promocard, PromocardLoading };