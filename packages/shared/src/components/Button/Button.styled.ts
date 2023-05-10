import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 12px;
`;

export const Button = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    background-color: initial;
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.2)' : 'rgba(0, 0, 0, 0.4)'};
    opacity: 0.8;
    cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
    border-radius: 2px;
    transition-duration: 0.2s;

    &:hover {
      background-color: ${(props) => props.disabled ? 'initial' : 'rgba(0, 0, 0, 0.2)'};
      opacity: 0.9;
    }
`;

export const ApplyButton = styled(Button)`
  border: none;
  background-color: ${(props) => props.disabled ? 'initial !important' : 'rgba(0, 255, 50, 0.6)'};
  color: ${(props) => props.disabled ? 'rgba(0, 0, 0, 0.6)' : 'initial'};
  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  transition-duration: ${(props) => props.disabled ? 'initial' : '0.2s'};

  &:hover {
    background-color: rgb(0, 255, 50);
    opacity: 0.9;
  }
`;