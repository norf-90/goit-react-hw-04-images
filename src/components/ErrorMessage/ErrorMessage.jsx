import React from 'react';
import { Text, Wrapper } from './ErrorMessage.styled';
const ErrorMessage = () => {
  return (
    <Wrapper>
      <img
        src="https://i.kym-cdn.com/photos/images/newsfeed/001/042/619/4ea.jpg"
        alt="travolta"
      />
      <Text>Nothing found...</Text>
    </Wrapper>
  );
};

export default ErrorMessage;
