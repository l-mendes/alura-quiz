import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoaderDiv = styled.div`
  border: 0.2em solid transparent;
  border-top: 0.25em solid ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  animation: ${spin} 0.6s linear infinite;
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <LoaderDiv />
    </LoaderContainer>
  );
}
