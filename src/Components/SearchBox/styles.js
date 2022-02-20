import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-style: italic;
  border-radius: 1rem 1rem 0 0;
  padding: 0.25rem 0.5rem;
  border: 1px solid #f1f1f1;
  background-color: transparent;
  color: #f1f1f1;
  margin-bottom: 3rem;

  &::placeholder {
    color: #f1f1f1;
  }

  &:focus {
    border: 1px solid black;
    outline: none;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
    height: 2rem;
  }
`
