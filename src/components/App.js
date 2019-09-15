import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, Catalog, About, Contacts, NotFound, Basket } from './components/pages';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/catalog' exact component={Catalog} />
                    <Route path='/about' exact component={About} />
                </Switch>
            </Router>
        </div>
    );
};
export default App;
