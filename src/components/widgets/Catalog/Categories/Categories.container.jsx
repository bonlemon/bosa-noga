import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import Preloader from '../../../core/Preloader';
import { categoriesIsLoadingSelector, categoriesSelector } from '../../../../redux/reducers/categories';
import { fetchItemsLoading } from '../../../../redux/actions';
import { getSelectedCategoryId } from '../../../../redux/reducers/items';

class CategoriesContainer extends Component {
    handleOnClickCategory = (id) => () => {
        this.props.onSelectCategory({ categoryId: id });
    };

    render() {
        const { isLoading, categories, categoryId } = this.props;
        return isLoading ? (
            <Preloader />
        ) : (
            <Categories categoryId={categoryId} categories={categories} onClickCategory={this.handleOnClickCategory} />
        );
    }
}
function mapStateToProps(state) {
    return {
        categories: categoriesSelector(state),
        categoryId: getSelectedCategoryId(state),
        isLoading: categoriesIsLoadingSelector(state),
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onSelectCategory: (params) => dispatch(fetchItemsLoading(params)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoriesContainer);
