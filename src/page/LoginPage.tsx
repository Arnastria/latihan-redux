import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';
import { Grid, Paper, TextField, Button } from '@material-ui/core';
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
    logo: {
        maxWidth: 150
    },
    wrapperPapper: {
        marginRight: '10%',
        marginLeft: '10%'
    },
    paper: {
        margin: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    buttonLogin: {
        backgroundColor: '#ff9900',
        color: 'white',
    },
    error: {
        color: "red",
        height: 20,
    },
}));

export default function LoginPage() {
    const classes = useStyles();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isError, setIsError] = useState(false);
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
            <Grid item className={classes.wrapperPapper} xs={12} sm={12} md={3} component={Paper} elevation={6} square >
                <div className={classes.paper}>
                    <img className={classes.logo} src="https://www.poinin.com/_next/image?url=%2Fassets%2Ficon%2Fpoinin_icon.png&w=3840&q=75" />
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
                        className={classes.buttonLogin}
                        fullWidth
                        variant="contained"
                        onClick={() => { login_click({ username: username, password: password }) }}
                    >
                        Sign In
                    </Button>
                    {isError ? <div className={classes.error}>Wrong username or password</div> : <div className={classes.error}></div>}
                </div>
            </Grid>
        </Grid>
    );
}
