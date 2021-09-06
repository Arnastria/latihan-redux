export const loginUser = (credentials: any, store: any) => {
    console.log("login")
    const { username, password } = credentials;
    console.log("username in actions : " + username);
    console.log("username in actions : " + password);

    // dispatch();
    store.dispatch({
        type: 'LOGGED_IN',
    })
}

export const logoutUser = (store: any) => {
    console.log("logout")
    // dispatch();
    store.dispatch({
        type: 'LOGGED_OUT'
    })
}