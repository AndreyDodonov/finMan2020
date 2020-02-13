import React from "react";
import {Statistics} from "./pages/Statistics";
import IncomePage from "./pages/IncomePage/IncomePage";
import {AuthPage} from "./pages/AuthPage";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/links" exact>
                    <Statistics/>
                </Route>
                <Route path="/income" exact>
                    <IncomePage/>
                </Route>
                <Redirect to="/income"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
};
