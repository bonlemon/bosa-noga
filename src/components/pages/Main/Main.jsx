import React, { Fragment } from 'react';
import { CatalogWidget, TopSalesWidget } from '../../widgets';

const Main = () => {
    return (
        <Fragment>
            <TopSalesWidget />
            <CatalogWidget />
        </Fragment>
    );
};
export default Main;
