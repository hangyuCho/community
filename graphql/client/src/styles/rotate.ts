import { keyframes } from 'styled-components';

export const rotate = (direction: 'left' | 'right') => keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${direction === 'left' ? '-360deg' : '360deg'});
  }
`;
