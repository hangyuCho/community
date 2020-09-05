import styled from 'styled-components';

/**
 * import Button from '@material-ui/core/Button';
 * only use for material-ui Button
 */

const ButtonWrapper = styled('div')`
  display: flex;
  justify-content: center;
  > button {
    margin: ${(p) => p.theme.space}px;
  }
`;

export { ButtonWrapper };
