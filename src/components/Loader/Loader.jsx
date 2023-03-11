import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ProgressBar
      height="200"
      width="100%"
      ariaLabel="progress-bar-loading"
      wrapperStyle={{
        display: 'block',
      }}
      wrapperClass="progress-bar-wrapper"
      borderColor="none"
      barColor="#00aaff"
    />
  );
};

export default Loader;
