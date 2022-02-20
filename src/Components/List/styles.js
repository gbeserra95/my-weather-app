import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  position: absolute;
  flex-direction: column;
  width: calc(100% - 3rem);
  list-style: none;
  border: 1px solid black;
  border-top: none;
  border-radius: 0 0 1rem 1rem;
  margin: 3rem 1.5rem;
  overflow: hidden;
  visibility: visible;

  @media (max-width: 992px) {
    font-size: 1rem;
    margin-top: 2rem;
  }
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  font-style: italic;
  padding: 0.25rem 0.5rem;
  background-color: #f1f1f1;
  border-top: 1px solid lightgray;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
    transition: 0.2s;
  }

  @media (max-width: 992px) {
    font-size: 1rem;
    height: 2rem;
  }
`
