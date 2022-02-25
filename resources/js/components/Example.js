import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import View from './View';
import Entry from './Entry';
import Update from './Update';

function Example() {
    return (
        <Router>
            <>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={View}/>
                    <Route path="/Entry" exact component={Entry}/>
                    <Route path="/Update/:id" exact component={Update}/>
                </Switch>
            </>
        </Router>
    );
}

export default Example;

if (document.getElementById('root')) {
    ReactDOM.render(<Example />, document.getElementById('root'));
}
