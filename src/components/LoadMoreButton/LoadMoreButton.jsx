import React from 'react';
import { Button } from './LoadMoreButton.styled';
import PropTypes from 'prop-types';

const LoadMoreButton = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <Button type="button" onClick={handleClick}>
      Load more
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
