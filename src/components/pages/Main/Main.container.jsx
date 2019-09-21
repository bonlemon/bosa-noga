import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchTopSalesLoading, fetchCategoriesLoading, fetchItemsLoading } from '../../../redux/actions';
import { TopSalesWidget, CatalogWidget } from '../../widgets';

class MainContainer extends Component {
    componentDidMount() {
        const { fetchTopSales, fetchCategories, fetchItems } = this.props;

        fetchTopSales();
        fetchCategories();
        fetchItems();
    }

    render() {
        return (
            <Fragment>
                <TopSalesWidget />
                <CatalogWidget />
            </Fragment>
        );
    }
}
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTopSales: () => dispatch(fetchTopSalesLoading()),
        fetchCategories: () => dispatch(fetchCategoriesLoading()),
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
