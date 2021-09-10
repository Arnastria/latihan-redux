import { makeStyles } from '@material-ui/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React from 'react';
import { PromoData } from '../data/PromoData';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});


function PromocardLoading(props: any) {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <Skeleton variant="rect" style={{ borderRadius: '5px', width: '50%', display: 'flex' }} />
                    </div>

                    <Card elevation={4} raised style={{ position: 'relative', display: 'relative', height: "100%", width: 150, borderRadius: 10 }}>
                        <div style={{ height: 60, margin: 6 }} />
                        <Skeleton variant="rect" style={{ height: '100%', width: '100%', display: 'flex', minHeight: 150 }} />
                    </Card>
                    <div style={{ fontSize: 12 }}>
                        <   Skeleton width={75} height={25} />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

const Promocard = (props: any) => {
    const { promoData } = props;
    const classes = useStyles();
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item>
                <div style={{ marginTop: "24px" }}>
                    <div style={{ height: 30 }}>
                        <img style={{ width: 75 }} src={promoData.MerchantLogo} />
                    </div>

                    <Card elevation={4} raised style={{ position: 'relative', display: 'relative', height: "100%", width: 150, borderRadius: 10 }}>
                        <Grid container direction="column">
                            <Grid item  >
                                <div>
                                    {promoData.ShowHotPromo ?
                                        <>
                                            <div style={{ height: 25 }}>
                                                <div style={{ textAlign: 'center', fontSize: 10, backgroundColor: promoData.Color, color: 'white', maxWidth: '50%', borderBottomRightRadius: '10px' }}>
                                                    Hot Promo
                                                </div>
                                            </div>
                                        </>
                                        :
                                        <></>
                                    }
                                    {
                                        promoData.ShowHotPromo ?
                                            <Grid container direction="column" style={{ height: 35, fontSize: 13, color: promoData.Color, margin: 6 }}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                            :

                                            <Grid container direction="column" justifyContent="center"
                                                alignItems="flex-start" style={{ height: 60, fontSize: 14, color: promoData.Color, margin: 6 }}>
                                                <Grid item>{promoData.TitleRow1}</Grid>
                                                <Grid item style={{ fontWeight: 'bold' }}>{promoData.TitleRow2}</Grid>
                                            </Grid>
                                    }

                                </div>
                            </Grid>
                            <Grid item >

                                <img style={{ display: 'flex', maxHeight: 150 }} src={promoData.Background} />
                                {promoData.CardLogo != '' ?
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '0px',
                                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                        width: '100%'
                                    }}>
                                        <img style={{ width: 75, padding: 2 }} src={promoData.CardLogo} />
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