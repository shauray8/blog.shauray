import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'; 


export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return <Router>
            <Switch>
                <Route exact path="/">
                    <p>Neulasta</p>
                </Route>
                
                <Route path="/join" component={RoomJoinPage}>
                    
                </Route>
            </Switch>
        </Router>
    }
}