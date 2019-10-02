import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Product from './Product';
// import { getItemsIsLoading, getSelectedProductById } from '../../../redux/reducers/items';
import { getSelectedProductById } from '../../../redux/reducers/items';
// import { Preloader } from '../../core';
import { addProductIntoBasket } from '../../../redux/actions/basket';

class ProductContainer extends Component {
    state = {
        count: 1,
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
        this.setState(({ count }) => {
            if (operation === 'add') {
                return { count: Number(count) + 1 };
            } else {
                return { count: Number(count) - 1 };
            }
        });
    };
    handleOnChangeSelected = (e) => {
        this.setState({ selected: e.target.id });
    };

    handleOnGoInBasket = () => {
        const { history, product, onAddProductIntoBasket } = this.props;
        const { count } = this.state;

        onAddProductIntoBasket({ product: { ...product, count } });
        history.push('/basket');
    };
    render() {
        const { product } = this.props;
        const { count, selected } = this.state;
        return !product ? null : (
            <Product
                count={count}
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
        // isLoading: getItemsIsLoading(state),
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
