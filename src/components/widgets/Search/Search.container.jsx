import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItemsLoading } from '../../../redux/actions';
import { getItemsQueryText } from '../../../redux/reducers/items';
import { changeQueryText } from '../../../redux/actions/items';
import Search from './Search';

class SearchContainer extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.fetchCatalog();
    };
    handleChange = (e) => {
        e.preventDefault();
        const { onChangeText } = this.props;
        onChangeText({ queryText: e.target.value });
    };

    fetchCatalog = () => {
        const { queryText, fetchItems } = this.props;
        fetchItems({ q: queryText });
    };

    render() {
        const { invisible, isHeader, isCatalog } = this.props;
        return <Search {...{ isHeader, invisible, isCatalog }} onSubmit={this.handleSubmit} onChange={this.handleChange} />;
    }
}
function mapStateToProps(state) {
    return {
        queryText: getItemsQueryText(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onChangeText: (params) => dispatch(changeQueryText(params)),
        fetchItems: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchContainer);
