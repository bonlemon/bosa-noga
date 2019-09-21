import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopSales from './TopSales';
import { getTopSales, getTopSalesisLoading } from '../../../redux/reducers/topSales';
import Preloader from '../../core/Preloader';

class TopSalesContainer extends Component {
    render() {
        const { isLoading, items } = this.props;
        return isLoading ? <Preloader /> : <TopSales items={items} />;
    }
}
function mapStateToProps(state) {
    return {
        items: getTopSales(state),
        isLoading: getTopSalesisLoading(state),
    };
}
function mapDispatchToProps(dispatch) {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TopSalesContainer);
