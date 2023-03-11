import styled from '@emotion/styled';

export const Header = styled.header`
  padding: 40px 30px;
  font-family: monospace;
  background-color: #515151;
  box-shadow: 0px 5px 10px #303030;
`;

export const Form = styled.form`
  font-weight: 900;
  font-size: 15px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  width: 90%;
  width: 100%;
  height: 50px;
  padding: 0 20px 0 60px;

  font-size: 20px;
  font-weight: 900;
  letter-spacing: 7px;
  color: #ff652d;

  border-radius: 50px;
  background: #515151;
  outline: none;
  transition: box-shadow 200ms, text-shadow 200ms;

  ::placeholder {
    color: #c5c5c5;
  }

  :focus {
    background: #515151;
    box-shadow: inset 5px 5px 10px #303030, inset -5px -5px 10px #727272;
    text-shadow: 2px 2px 4px #202020, -2px -2px 4px #828282;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  top: 50%;
  left: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  font-family: inherit;
  letter-spacing: 7px;
  color: #00aaff;
  transform: translateY(-50%);
  border: none;
  border-radius: 50%;
  background: linear-gradient(145deg, #494949, #575757);
  box-shadow: 2px 2px 2px #303030, -2px -2px 2px #727272;
  cursor: pointer;
  transition: color 200ms linear, box-shadow 50ms linear;

  :active {
    box-shadow: 1px 1px 2px #303030, -1px -1px 2px #727272;
  }
  :hover {
    color: #ff652d;
    text-shadow: 0 0 7px #ff652d;
  }
`;
