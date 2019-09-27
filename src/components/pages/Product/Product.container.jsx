import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMoreItemsLoading } from '../../../redux/actions';
import Product from './Product';
import { getSelectedProductById } from '../../../redux/reducers/items';

class ProductContainer extends Component {
    componentDidMount() {
        const {
            fetchItems,
            match: {
                params: { id },
            },
        } = this.props;

        fetchItems({ id });
    }

    render() {
        const { product } = this.props;
        console.warn(product);
        return <Product product={product} />;
    }
}
function mapStateToProps(state) {
    return {
        isLoading: getSelectedProductById(state),
        product: getSelectedProductById(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        fetchItems: (params) => dispatch(fetchMoreItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductContainer);
