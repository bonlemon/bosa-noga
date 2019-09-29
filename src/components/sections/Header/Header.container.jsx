import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import Header from './Header';
import { getItemsQueryText } from '../../../redux/reducers/items';
import { changeQueryText } from '../../../redux/actions/items';
import { getBasketItems } from '../../../redux/reducers/basket';
import { withRouter } from 'react-router-dom';

class HeaderContainer extends Component {
    state = {
        isVisible: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.fetchCatalog();
    };
    handleToggleForm = (e) => {
        e.stopPropagation();

        this.setState(
            ({ isVisible }) => ({ isVisible: !isVisible }),
            () => {
                const { isVisible } = this.state;
                const { queryText } = this.props;
                if (!isVisible && queryText) {
                    this.fetchCatalog();
                }
            }
        );
    };
    handleChange = (e) => {
        e.preventDefault();
        const { onChangeText } = this.props;
        onChangeText({ queryText: e.target.value });
    };
    handleOnClickGoToBasket = () => {
        this.props.history.push('/basket');
    };

    fetchCatalog = () => {
        const { queryText, fetchItems } = this.props;
        fetchItems({ q: queryText });
    };

    render() {
        const { isVisible } = this.state;
        const { amountInBasket } = this.props;

        return (
            <Header
                isVisible={isVisible}
                amountInBasket={amountInBasket}
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                onToggleForm={this.handleToggleForm}
                onClickGoToBasket={this.handleOnClickGoToBasket}
            />
        );
    }
}
function mapStateToProps(state) {
    return {
        queryText: getItemsQueryText(state),
        amountInBasket: getBasketItems(state).length,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onChangeText: (params) => dispatch(changeQueryText(params)),
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HeaderContainer)
);
