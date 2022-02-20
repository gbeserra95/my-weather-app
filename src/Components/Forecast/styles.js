import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`
