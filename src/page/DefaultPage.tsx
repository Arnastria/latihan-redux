import { Grid } from '@material-ui/core';
import React from 'react';
import { Promocard, PromocardFixed, PromocardLoading } from '../components/Promocard';
import { DummyPromoData } from '../data/DummyList';

function DefaultPage() {
    const i = DummyPromoData;
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Promocard promoData={i[0]} />
            </Grid>
            <Grid item>
                <Promocard promoData={i[2]} />
            </Grid>
            <Grid item>
                <PromocardLoading />
            </Grid>
            <Grid item>
                <PromocardFixed promoData={i[0]} />
            </Grid>
            <Grid item>
                <PromocardFixed promoData={i[2]} />
            </Grid>


        </Grid>
    );
}

export { DefaultPage };