import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Header, Content, Footer } from './sections';
import { MainContainer, Catalog, About, Contacts, Product, NotFound } from './pages';
import { fetchCategoriesLoading, fetchItemsLoading, fetchTopSalesLoading } from '../redux/actions';
import { connect } from 'react-redux';

class App extends Component {
    componentDidMount() {
        const { fetchTopSales, fetchCategories, fetchItems } = this.props;

        fetchTopSales();
        fetchCategories();
        fetchItems();
    }

    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <Header />
                    <Content>
                        <Switch>
                            <Route path='/' exact component={MainContainer} />
                            <Route path='/catalog' exact component={Catalog} />
                            <Route path='/products/:id' exact component={Product} />
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchTopSales: () => dispatch(fetchTopSalesLoading()),
        fetchCategories: () => dispatch(fetchCategoriesLoading()),
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    null,
    mapDispatchToProps
)(App);
