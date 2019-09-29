import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Product from './Product';
import { getItemsIsLoading, getSelectedProductById } from '../../../redux/reducers/items';
import { Preloader } from '../../core';
import { addProductIntoBasket } from '../../../redux/actions/basket';

class ProductContainer extends Component {
    state = {
        amount: 1,
        selected: null,
    };
    componentDidMount() {
        const {
            onFetchItems,
            match: {
                params: { id },
            },
        } = this.props;

        onFetchItems({ id });
    }
    handleOnChangeAmount = (operation) => () => {
        this.setState(({ amount }) => {
            if (operation === 'add') {
                return { amount: Number(amount) + 1 };
            } else {
                return { amount: Number(amount) - 1 };
            }
        });
    };
    handleOnChangeSelected = (e) => {
        this.setState({ selected: e.target.id });
    };

    handleOnGoInBasket = () => {
        const { history, product, onAddProductIntoBasket } = this.props;
        const { amount } = this.state;

        onAddProductIntoBasket({ product: { ...product, amount } });
        history.push('/basket');
    };
    render() {
        const { isLoading, product } = this.props;
        const { amount, selected } = this.state;
        return isLoading || !product ? (
            <Preloader />
        ) : (
            <Product
                amount={amount}
                selected={selected}
                product={product}
                onChangeSelected={this.handleOnChangeSelected}
                onChangeAmount={this.handleOnChangeAmount}
                onClickInBasket={this.handleOnGoInBasket}
            />
        );
    }
}
function mapStateToProps(state) {
    return {
        isLoading: getItemsIsLoading(state),
        product: getSelectedProductById(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onFetchItems: (params) => dispatch(fetchItemsLoading(params)),
        onAddProductIntoBasket: (params) => dispatch(addProductIntoBasket(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
