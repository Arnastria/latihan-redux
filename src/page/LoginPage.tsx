import React, { useState } from 'react';
import { useStore } from 'react-redux';
import { loginUser, logoutUser } from '../redux/actions/auth';



function login_click(props: any, store: any) {
    const { username, password } = props;
    console.log(username);
    console.log(password);
    // console.log(store.getState())
    console.log("==")

    loginUser(props, store);
}

function check(msg: any) {
    console.log("check")
    console.log(msg)
    // console.log(store.getState().auth.tokens)
}

function logout(store: any) {
    logoutUser(store)
}
function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const store = useStore();
    return (
        <>
            <h2>
                Login Page
            </h2>
            <input value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <br />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password"></input>
            <br />
            <button onClick={() => { login_click({ username: username, password: password }, store) }}>Login</button>
            <button onClick={() => { check(store.getState()) }}>Check</button>
            <button onClick={() => { logout(store) }}>Logout</button>
        </>
    );
}

export default LoginPage;