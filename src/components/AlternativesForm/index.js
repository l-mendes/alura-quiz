import styled from 'styled-components';

const AlternativesForm = styled.form`
  label {
    &[data-selected="true"] {
      background-color: ${({ theme }) => theme.colors.primary.main};
      
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.success.main};
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.error.main};
      }
    }
    &:focus {
      opacity: 1;
    } 
  }
  button {
    margin-top: 24px;
  }
`;

export default AlternativesForm;
