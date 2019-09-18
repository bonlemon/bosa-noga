import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopSalesLoading, fetchCategoriesLoading, fetchItemsLoading } from '../../../redux/actions';
import Main from './Main';

class MainContainer extends Component {
    componentDidMount() {
        const { fetchTopSalesLoading, fetchCategoriesLoading, fetchItemsLoading } = this.props;

        fetchTopSalesLoading();
        fetchCategoriesLoading();
        // fetchItemsLoading({ id: 123, categoryId: 2, offset: 6 });
        fetchItemsLoading();
    }

    render() {
        return <Main />;
    }
}
function mapStateToProps(state) {
    return {};
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTopSalesLoading: () => dispatch(fetchTopSalesLoading()),
        fetchCategoriesLoading: () => dispatch(fetchCategoriesLoading()),
        fetchItemsLoading: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainContainer);
