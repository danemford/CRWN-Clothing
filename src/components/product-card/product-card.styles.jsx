import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    position: relative;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 66%;
    display: none;
    padding: 1px;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;

export const Price = styled.span`
  width: 10%;
`;