import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { Header, Content, Footer } from './sections';
import { MainContainer, Catalog, About, Contacts, Product, Basket, NotFound } from './pages';
import { fetchCategoriesLoading, initialBasket } from '../redux/actions';
import { connect } from 'react-redux';
import { getItemsErrors } from '../redux/reducers/items';
import { getBasketItems, getOrderError, getOwner } from '../redux/reducers/basket';
import { getTopSalesErrors } from '../redux/reducers/topSales';
import { getCategoriesError } from '../redux/reducers/categories';
import Modal from './core/Modal';

class App extends Component {
    componentDidMount() {
        const { onFetchCategories, onInitialBasket } = this.props;

        onFetchCategories();

        const basket = localStorage.getItem('BASKET');

        if (basket) {
            onInitialBasket(JSON.parse(basket));
        }
    }
    componentDidUpdate(pP) {
        const { basketItems } = this.props;

        if (pP.basketItems.length !== basketItems.length) {
            localStorage.setItem(
                'BASKET',
                JSON.stringify({
                    list: basketItems,
                })
            );
        }
    }

    render() {
        const { errorMessage } = this.props;
        return (
            <div className='App'>
                <BrowserRouter>
                    <Header />
                    <Content>
                        <Switch>
                            <Route path='/' exact component={MainContainer} />
                            <Route path='/catalog' exact component={Catalog} />
                            <Route path='/products/:id' exact component={Product} />
                            <Route path='/basket' exact component={Basket} />
                            <Route path='/about' exact component={About} />
                            <Route path='/contacts' exact component={Contacts} />
                            <Route path='/404' exact component={NotFound} />
                            <Redirect to='/404' />
                        </Switch>
                    </Content>
                    <Footer />
                    {errorMessage && <Modal errorMessage={errorMessage} />}
                </BrowserRouter>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const items = getItemsErrors(state);
    const order = getOrderError(state);
    const topSales = getTopSalesErrors(state);
    const categories = getCategoriesError(state);

    const getErrorMessage = (slices) => slices.find((slice) => slice);

    return {
        owner: getOwner(state),
        basketItems: getBasketItems(state),
        errorMessage: getErrorMessage([items, order, topSales, categories]),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onFetchCategories: () => dispatch(fetchCategoriesLoading()),
        onInitialBasket: (payload) => dispatch(initialBasket(payload)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
