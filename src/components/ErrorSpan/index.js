import styled from 'styled-components';

const ErrorSpan = styled.span`
  color: ${({ theme }) => theme.colors.error.main};
  margin-top: 5px;
  font-size: 14px;
  line-height: 2;
  display: flex;
  justify-content: center;
`;

export default ErrorSpan;
