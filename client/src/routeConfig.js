import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import App from './App';
import MainLayout from './components/MainLayout';
import EmptyLayout from './components/EmptyLayout';
import Timeline from './components/Timeline';
import Friends from './components/Friends';
import ChatWelcome from './components/Chat-Welcome';
import NewRoom from './components/NewRoom';
import ChatRoom from './components/ChatRoom';

const AppRoute = ({ Layout, Component, path }, ...rest) => (
    <Route {...rest} path={path} render={props => (
        <Layout>
            <Component {...props} />
        </Layout>
    )} />
)

class MainRoute extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <AppRoute exact path="/" Layout={MainLayout} Component={App} />
                    <AppRoute exact path="/dashboard" Layout={MainLayout} Component={Dashboard} />
                    <AppRoute exact path="/timeline" Layout={MainLayout} Component={Timeline} />
                    <AppRoute exact path="/friends" Layout={MainLayout} Component={Friends} />
                    <AppRoute exact path="/chat-welcome" Layout={EmptyLayout} Component={ChatWelcome} />
                    <AppRoute exact path="/new-room" Layout={MainLayout} Component={NewRoom} />
                    <AppRoute exact path="/chat-room/:id" Layout={EmptyLayout} Component={ChatRoom} />
                </Switch>
            </Router>
        );
    }
}

export default MainRoute;
