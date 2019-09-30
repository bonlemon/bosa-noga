import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Basket from './Basket';
import { getItemsIsLoading, getSelectedProductById } from '../../../redux/reducers/items';
import { Preloader } from '../../core';
import { getBasketItems, getOrderLoading, getOrderSuccess, getOwner } from '../../../redux/reducers/basket';
import { editOwner, makeOrderLoading, removeProductIntoBasket } from '../../../redux/actions/basket';

class BasketContainer extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.isLoading && prevProps.isSuccess) {
            localStorage.removeItem('BASKET');
        }
    }
    handleOnRemove = (id) => () => {
        this.props.onRemove({ id });
    };
    handleOnEditOwner = (e) => {
        this.props.onEditOwner({ id: e.target.id, value: e.target.value });
    };
    handleOnSubmit = () => {
        const { owner, basketItems, onMakeOrderLoading } = this.props;
        const items = basketItems.map(({ id, price, amount }) => ({ id, price, count: amount }));
        onMakeOrderLoading({ owner, items });
    };
    render() {
        const { isLoading, basketItems } = this.props;
        return isLoading ? (
            <Preloader />
        ) : (
            <Basket
                items={basketItems}
                onRemove={this.handleOnRemove}
                onEditOwner={this.handleOnEditOwner}
                onSubmit={this.handleOnSubmit}
            />
        );
    }
}
function mapStateToProps(state) {
    return {
        owner: getOwner(state),
        basketItems: getBasketItems(state),
        isLoading: getOrderLoading(state),
        isSuccess: getOrderSuccess(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onRemove: (params) => dispatch(removeProductIntoBasket(params)),
        onEditOwner: (params) => dispatch(editOwner(params)),
        onMakeOrderLoading: (params) => dispatch(makeOrderLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketContainer);
