import { useStore } from "react-redux";
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router
} from "react-router-dom";
import AdminPage from "../page/AdminPage";
import { PromoPage } from "../page/PromoPage";
import { DefaultPage } from "../page/DefaultPage";
import LoginPage from "../page/LoginPage";
import { PromoPageDiv } from "../page/PromoPageDiv";



function AuthRoute(props: any) {
    const { children } = props;
    const store = useStore()
    console.log(store.getState())
    console.log(store.getState().auth.tokens)
    const loggedIn = store.getState().auth.tokens != null;
    //TODO check redux

    if (!loggedIn) {
        return (
            <Route
                render={(props) => (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )}
            />);
    }

    return (
        <Route>
            {children}
        </Route>);
}

export function RouteSelector(props: any) {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <LoginPage />
                </Route>
                <Route path="/promo">
                    <PromoPage />
                </Route>
                <Route path="/promodiv">
                    <PromoPageDiv />
                </Route>
                <AuthRoute path="/admin">
                    <AdminPage />
                </AuthRoute>
                <Route path="/">
                    <DefaultPage />
                </Route>
            </Switch>
        </Router>

    );
}


