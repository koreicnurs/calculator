import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Counter from "./containers/Counter/Counter";
import Calculator from "./containers/Calculator/Calculator";
import Layout from "./UI/Layout/Layout";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path='/' exact component={Layout}/>
                        <Route path='/enter' exact component={Counter}/>
                        <Route path='/cal' exact component={Calculator}/>
                        <Route render={() => <h1>Not Found</h1>}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default App;