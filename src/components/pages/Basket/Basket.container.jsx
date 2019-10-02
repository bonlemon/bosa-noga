import React, { Component } from 'react';
import { connect } from 'react-redux';
import Basket from './Basket';
import { Preloader } from '../../core';
import { getBasketItems, getOrderLoading, getOrderSuccess, getOwner } from '../../../redux/reducers/basket';
import { editOwner, makeOrderLoading, removeProductIntoBasket, resetBasket } from '../../../redux/actions/basket';

class BasketContainer extends Component {
    handlerOnClose = () => {
        const { history, onResetBasket } = this.props;
        localStorage.removeItem('BASKET');
        onResetBasket();
        history.push('/');
    };
    handleOnRemove = (id) => () => {
        this.props.onRemove({ id });
    };
    handleOnEditOwner = (e) => {
        this.props.onEditOwner({ id: e.target.id, value: e.target.value });
    };
    handleOnSubmit = (e) => {
        e.preventDefault();
        const { owner, basketItems, onMakeOrderLoading } = this.props;
        const items = basketItems.map(({ id, price, count }) => ({ id, price, count }));
        onMakeOrderLoading({ owner, items });
    };
    render() {
        const { isLoading, isSuccess, basketItems } = this.props;
        return isLoading ? (
            <Preloader />
        ) : (
            <Basket
                items={basketItems}
                isSuccess={isSuccess}
                onClose={this.handlerOnClose}
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
        onResetBasket: (params) => dispatch(resetBasket(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketContainer);
