import styled from 'styled-components';

const GridWrapper = styled('div')`
  display: grid;
  grid-column: ${(props) => props.theme.space}px;
  grid-gap: ${(props) => props.theme.space * 2}px;
`;

export { GridWrapper };
