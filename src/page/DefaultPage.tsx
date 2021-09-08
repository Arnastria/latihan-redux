import { Grid } from '@material-ui/core';
import React from 'react';
import { Promocard, PromocardLoading } from '../components/Promocard';

function DefaultPage() {
    return (
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
            <Grid item>
                <Promocard name={"ayez"} image={"https://poininngcdn.azureedge.net/smartpromo/Promo/Background/f248e1cf-41b2-4e5d-97ea-258c3eecc47f.jpg"} />
            </Grid>
            <Grid item>
                <Promocard isHotPromo image={"https://poininngcdn.azureedge.net/smartpromo/Promo/Background/1898ffcc-cf04-4209-a67d-3d82ecdca491.jpg"} />
            </Grid>
            <Grid item>
                <PromocardLoading />
            </Grid>

        </Grid>
    );
}

export { DefaultPage };