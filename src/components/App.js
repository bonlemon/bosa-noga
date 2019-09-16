import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Header, Content, Footer } from './sections';
import { Main, Catalog, About, Contacts, NotFound } from './pages';

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Content>
                    <Switch>
                        <Route path='/' exact component={Main} />
                        <Route path='/catalog' exact component={Catalog} />
                        <Route path='/about' exact component={About} />
                        <Route path='/contacts' exact component={Contacts} />
                        <Route path='/404' exact component={NotFound} />
                        <Redirect to='/404' />
                    </Switch>
                </Content>
                <Footer />
            </BrowserRouter>
        </div>
    );
};
export default App;
