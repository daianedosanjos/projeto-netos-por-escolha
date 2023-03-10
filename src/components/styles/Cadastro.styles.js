import styled from "styled-components";

export const FormularioContato = styled.section`
  width: 100%;

  margin-top: 8rem;

  input {
    width: 460px;
    padding: 12px 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }

  textarea {
    width: 460px;
    padding: 12px 32px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom: 1rem;
    margin-left: 3rem;
  }

  button {
    background-color: #600227;
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin-top: 1rem;
    width: 460px;
    border-radius: 4px;
    cursor: pointer;
    margin-left: 3rem;
    margin-left: 3rem;
  }

  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5rem 10rem 5rem 10rem;
    color: #600227;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
  }

  h4 {
    margin-left: 5.8rem;
    margin-bottom: 2rem;
  }
`;
export const ButtonCadastro = styled.button`
  height: 34px;
  border-radius: 4px;
  border: 0;
  cursor: pointer;
  background-color: #0fdbff;
  font-size: 18px;
  transition: background-color, transform 0.8s;

  :hover {
    background-color: #b72a6e;
    transform: scale(1.01);
  }
`;

export const FormContainer = styled.section`
  display: flex;
`;
export const FormularioImg = styled.div`
  img {
    width: 800px;
    margin-bottom: 2rem;
    border-radius: 50%;
    display: grid;
    margin-left: 1rem;
    margin-top: -2rem;
  }
`;
export const Form = styled.section`
  width: 550px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fdaad6;
  border-radius: 15px;
  margin-top: -1rem;
  margin-left: -3rem;
`;
