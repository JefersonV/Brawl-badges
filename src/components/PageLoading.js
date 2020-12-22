import { render } from '@testing-library/react';
import React from 'react';
import '../components/styles/PageLoading.css';
import Loader from './Loader';

function PageLoading () {
    return (
    <div className="PageLoading">
        <Loader />
    </div>
    );
}

export default PageLoading;