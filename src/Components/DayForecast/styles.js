import styled from 'styled-components'

export const ContainerMax = styled.div`
  width: 7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid #f1f1f1;
  border-radius: 1rem 0 1rem 0;
  color: #f1f1f1;
  gap: 0.5rem;

  @media (max-width: 992px) {
    display: none;
  }
`

export const ContainerMin = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0.5rem 1rem;
    border: 1px solid #f1f1f1;
    border-radius: 1rem 0 1rem 0;
    color: #f1f1f1;
    gap: 0.5rem;
  }
`

export const Date = styled.div`
  font-size: 0.75rem;
`

export const Temp = styled.div`
  display: flex;
  align-items: center;

  span {
    font-weight: bold;
    font-size: 1.25rem;
  }
`

export const Text = styled.div`
  font-size: 0.75rem;
  display: block;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  direction: ltr;
`
