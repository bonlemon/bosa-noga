import React, { Component } from 'react';
import { connect } from 'react-redux';
import Catalog from './Catalog';
import Preloader from '../../core/Preloader';
import { getItems, getItemsIsLoading } from '../../../redux/reducers/items';
import { fetchItemsLoading, fetchMoreItemsLoading } from '../../../redux/actions';

class CatalogContainer extends Component {
    componentDidMount() {
        const { fetchItems } = this.props;

        fetchItems();
    }
    handleOnClickMore = () => {
        this.props.onClickMore({ offset: 6 });
    };
    render() {
        const { isLoading, items, showSearchWidget } = this.props;
        return isLoading ? (
            <Preloader />
        ) : (
            <Catalog {...{ items, showSearchWidget }} onClickMore={this.handleOnClickMore} />
        );
    }
}
function mapStateToProps(state) {
    return {
        items: getItems(state),
        isLoading: getItemsIsLoading(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onClickMore: (params) => dispatch(fetchMoreItemsLoading(params)),
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CatalogContainer);
