import styled from 'styled-components';

/* eslint-disable-next-line */
export interface StoreUiSharedProps {}

const StyledStoreUiShared = styled.div`
  color: pink;
`;

export function StoreUiShared(props: StoreUiSharedProps) {
  return (
    <StyledStoreUiShared>
      <h1>Welcome to StoreUiShared!</h1>
    </StyledStoreUiShared>
  );
}

export default StoreUiShared;
