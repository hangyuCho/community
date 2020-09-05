import styled from 'styled-components';

const Desc = styled('div')`
  letter-spacing: 0.5px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  word-wrap: break-word;
  margin-bottom: ${(props) => props.theme.space}px;
`;

export { Desc };
