import React from "react";
import IncomePage from "./pages/IncomePage/IncomePage";
import {AuthPage} from "./pages/AuthPage";
import {Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import {Redirect} from "react-router-dom";
import DepositPage from "./pages/DepositPage/DepositPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ExpensesPage from "./pages/ExpensesPage/ExpensesPage";
import PlansPage from "./pages/PlansPage/PlansPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/deposit" exact>
                    <DepositPage/>
                </Route>
                <Route path="/dashboard" exact>
                    <DashboardPage/>
                </Route>
                <Route path="/income" exact>
                    <IncomePage/>
                </Route>
                <Route path="/expenses" exact>
                    <ExpensesPage/>
                </Route>
                <Route path="/plans" exact>
                    <PlansPage/>
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
