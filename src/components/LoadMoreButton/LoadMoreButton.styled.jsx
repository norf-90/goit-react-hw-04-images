import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  padding: 10px 30px;
  margin: 30px auto;
  align-items: center;

  font-family: monospace;
  font-size: 20px;
  letter-spacing: 7px;
  animation: pulse 500ms linear infinite alternate;

  border: none;
  border-radius: 50px;
  background: linear-gradient(145deg, #494949, #575757);
  box-shadow: 7px 7px 14px #303030, -7px -7px 14px #727272;
  cursor: pointer;
  transition: color 200ms linear, box-shadow 50ms linear;

  :active {
    box-shadow: 1px 1px 2px #303030, -1px -1px 2px #727272;
  }
  :hover,
  :focus {
    animation: none;
    color: #ff652d;
    text-shadow: 0 0 7px #ff652d;
  }

  @keyframes pulse {
    0% {
      color: #4f5050;
      text-shadow: none;
    }
    100% {
      color: #00aaff;
      text-shadow: 0 0 7px #00aaff;
    }
  }
`;
