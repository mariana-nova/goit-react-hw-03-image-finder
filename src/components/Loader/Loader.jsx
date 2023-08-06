import React from 'react';
import {Vortex} from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <Vortex  type="Oval" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
