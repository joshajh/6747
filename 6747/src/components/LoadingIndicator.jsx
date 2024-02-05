import React from 'react';
import { ClipLoader } from 'react-spinners';
import { useLoading } from './LoadingContext';

const LoadingIndicator = () => {
  const { isLoading } = useLoading();

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-indicator">
      <ClipLoader color="#123abc" size={150} />
    </div>
  );
};

export default LoadingIndicator;
