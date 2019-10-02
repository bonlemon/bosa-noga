import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopSales from './TopSales';
import { getTopSales, getTopSalesisLoading } from '../../../redux/reducers/topSales';
import Preloader from '../../core/Preloader';
import { fetchTopSalesLoading } from '../../../redux/actions';

class TopSalesContainer extends Component {
    componentDidMount() {
        const { fetchTopSales } = this.props;

        fetchTopSales();
    }
    render() {
        const { isLoading, items } = this.props;
        return isLoading ? <Preloader /> : items.length ? <TopSales items={items} /> : null;
    }
}
function mapStateToProps(state) {
    return {
        items: getTopSales(state),
        isLoading: getTopSalesisLoading(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchTopSales: () => dispatch(fetchTopSalesLoading()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopSalesContainer);
