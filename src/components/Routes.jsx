import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Contact, PageNotFound } from 'Components/Pages'
import { CustomerList, CustomerProfile } from 'Components/Customers'
import Login from 'Components/Login'
import Home from "Components/Home";

export default () => <div>
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route path="/contact" component={ Contact } />
        <Route exact path="/customers" component={ CustomerList } />
        <Route path="/customers/:id" component={ CustomerProfile } />
        <Route component={ PageNotFound } />
    </Switch>
</div>