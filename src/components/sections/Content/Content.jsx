import React from 'react';
import { Banner } from '../../../components/core';
import propTypes from 'prop-types';

const Content = ({ children }) => {
    return (
        <main className='container'>
            <div className='row'>
                <div className='col'>
                    <Banner />
                    {children}
                </div>
            </div>
        </main>
    );
};
Content.prototype = {
    children: propTypes.node,
};
export default Content;
