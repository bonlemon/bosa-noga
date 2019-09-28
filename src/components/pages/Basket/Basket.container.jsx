import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Basket from './Basket';
import { getItemsIsLoading, getSelectedProductById } from '../../../redux/reducers/items';
import { Preloader } from '../../core';

class BasketContainer extends Component {
    state = {
        amount: 1,
        selected: null,
    };
    componentDidMount() {
        const {
            fetchItems,
            match: {
                params: { id },
            },
        } = this.props;

        fetchItems({ id });
    }
    handleOnChangeAmount = (operation) => () => {
        this.setState(({ amount }) => {
            if (operation === 'add') {
                return { amount: amount + 1 };
            } else {
                if (amount === 0) {
                    return { amount: 0 };
                }
                return { amount: amount - 1 };
            }
        });
    };
    handleOnChangeSelected = (seleced) => {
        this.setState({ seleced });
    };

    handleOnGoInBasket = () => {
        this.props.history.push(/)
    };
    render() {
        const { isLoading, product } = this.props;
        const { amount } = this.state;
        return isLoading || !product ? (
            <Preloader />
        ) : (
            <Basket
                amount={amount}
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
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketContainer);
