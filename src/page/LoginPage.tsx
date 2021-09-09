import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import styles from '../css/stylesheet.module.css';
import { Card, Grid, Paper, Link, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundImage: 'url(https://www.poinin.com/assets/img/prize_for_you.png)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],

        backgroundPosition: 'left bottom',
    },
    paper: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function LoginPage() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
    // const store = useStore();
    const dispatch = useDispatch();
    const history = useHistory();
    const selector = useSelector((state: Rootstate) => state.auth);


    const login_click = (props: any) => {
        const { username, password } = props;
        console.log(username);
        console.log(password);
        if (username === "admin" && password === "admin123") {
            setIsError(false);
        } else {
            setIsError(true);
            return;
        }
        console.log("==")
        loginUser(props, dispatch);

        history.replace("/promo")
    }

    const Check = () => {
        console.log(selector)
    }

    const logout = () => {
        logoutUser(dispatch)
    }

    return (
        <Grid container justifyContent="flex-end" alignItems="center" className={classes.root} >
            <Grid item xs={12} sm={12} md={3} component={Paper} elevation={6} square style={{ marginRight: '10%', marginLeft: '10%' }}>
                <div className={classes.paper}>
                    <img style={{ maxWidth: 150 }} src="https://www.poinin.com/_next/image?url=%2Fassets%2Ficon%2Fpoinin_icon.png&w=3840&q=75" />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoFocus
                        value={username} onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password} onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => { login_click({ username: username, password: password }) }}
                        style={{ backgroundColor: '#ff9900', color: 'white' }}
                    >
                        Sign In
                    </Button>
                    {/* <Button
                        fullWidth
                        variant="outlined"
                        onClick={() => { Check() }}
                    >
                        Check-in
                    </Button>
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={() => { logout() }}
                        style={{ backgroundColor: 'red', color: 'white' }}
                    >
                        Sign Out
                    </Button> */}
                    {isError ? <div style={{ color: "red" }}>Wrong username or password</div> : <></>}
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Grid>
    );
}
