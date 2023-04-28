import styled from 'styled-components';

export const StoreItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10px;
    width: 190px;
    min-height: 135px;
    border: 2px solid rgba(255, 100, 50, 0.6);
    box-shadow: rgba(255, 100, 50, 0.2) 0px 0px 2px 2px;
`;

export const StoreItemDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    opacity: 0.8;
`;

export const StoreItemTitle = styled.span`
    font-weight: bold;
`;