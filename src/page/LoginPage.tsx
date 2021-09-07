import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { loginUser, logoutUser } from '../redux/actions/auth';
import { Rootstate } from '../redux/reducers';





function LoginPage() {
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

        history.push("/admin")
    }

    const Check = () => {
        console.log(selector)
    }

    const logout = () => {
        logoutUser(dispatch)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>
                Login Page
            </h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
            <br />
            {isError ? <div style={{ color: "red" }}>Wrong username or password</div> : <></>}

            <br />
            <button onClick={() => { login_click({ username: username, password: password }) }}>Login</button>
            <button onClick={() => { Check() }}>Check</button>
            <button onClick={() => { logout() }}>Logout</button>
        </div>
    );
}

export default LoginPage;