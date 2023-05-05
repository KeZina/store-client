import styled from 'styled-components';

export const UserStoreItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 10px;
`;

export const UserStoreItem = styled.div`
    display: flex;
    align-items: center;
    font-weight: bold;
    padding: 5px 10px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    cursor: default;
`;

export const ProfileTitle = styled.span`
    display: inline-block;
    margin-left: 20px;
    opacity: 0.8;
`;

export const ProfileValue = styled.span`
    display: inline-block;
    margin-left: 10px;
    font-weight: bold;
    // opacity: 0.8;
`;