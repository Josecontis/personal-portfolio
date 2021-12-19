import styled, { keyframes } from "styled-components";

const getAlertStyles = (props) => {
  return props.flag
    ? "background-color: #4CAF50;"
    : " background-color: #f44336;";
};

const setVisibility = (props) => {
  console.log(props.value);
  return props.value ? "visibility: hidden " : " ";
};

const alertAnimation = keyframes`
0% {
  transform: translateY(-100%);
  opacity -5;
}
100% {
  transform: translateY(0%);
  opacity 1;
}
`;

export const Text = styled.div`
  text-align: center;
  font-size: 12px;
`;

export const Alert = styled.div`
  padding: 10px;
  color: white;
  opacity: 1;
  margin-left: 45vw;
  transition: opacity 0.6s;
  width: 20vw;
  position: absolute;
  z-index: 2;

  ${getAlertStyles}

  animation: ${alertAnimation} 1s;
  ${setVisibility}
`;

export const CloseBtn = styled.button`
  margin-left: 10px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 20px;
  line-height: 25px;
  cursor: pointer;
  border: none;
  background: none;

  &:hover {
    color: black;
  }
`;
