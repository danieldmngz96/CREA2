import React from 'react';

import '../../src/styles/components/PageLoading.css';
import Loader from '../components/Loader';

function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default PageLoading;