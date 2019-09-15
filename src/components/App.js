import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

// import { Main, Catalog, About, Contacts, Basket, NotFound } from './components/pages';
import { Main, Catalog, About, NotFound } from './pages';

const App = () => {
    return (
        <div className='App'>
            <Router>
                <Switch>
                    <Route path='/' exact component={Main} />
                    <Route path='/catalog' exact component={Catalog} />
                    <Route path='/about' exact component={About} />
                    <Route path='/404' exact component={NotFound} />
                    <Redirect to='/404' />
                </Switch>
            </Router>
        </div>
    );
};
export default App;
