import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppUser from './AppUser';

const App = () => {
    return (
        <Router>
            <AppUser />
            <Switch>
                {/* Define your routes here */}
                {/* <Route path='/example' component={ExampleComponent}/> */}
            </Switch>
        </Router>
    );
};

export default App;