import styled from 'styled-components';

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border: 1px solid rgba(0, 0, 255, 0.2);
    padding: 8px 16px;
    margin: 8px 0 16px;
    border-radius: 2px;
    &:focus {
        outline: none;
    }
`;