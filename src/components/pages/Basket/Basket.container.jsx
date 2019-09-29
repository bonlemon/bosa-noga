import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Basket from './Basket';
import { getItemsIsLoading, getSelectedProductById } from '../../../redux/reducers/items';
import { Preloader } from '../../core';
import { getBasketItems, getOrderLoading, getOwner } from '../../../redux/reducers/basket';
import { editOwner, removeProductIntoBasket } from '../../../redux/actions/basket';

class BasketContainer extends Component {
    handleOnRemove = (id) => () => {
        this.props.onRemove({ id });
    };
    handleOnEditOwner = (owner) => {
        this.props.onEditOwner(owner);
    };
    render() {
        const { isLoading, basketItems } = this.props;
        return isLoading ? (
            <Preloader />
        ) : (
            <Basket items={basketItems} onRemove={this.handleOnRemove} onEditOwner={this.handleOnEditOwner} />
        );
    }
}
function mapStateToProps(state) {
    return {
        owner: getOwner(state),
        basketItems: getBasketItems(state),
        isLoading: getOrderLoading(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
        onRemove: (params) => dispatch(removeProductIntoBasket(params)),
        onEditOwner: (params) => dispatch(editOwner(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BasketContainer);
