import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { JobInfoItem } from '../molecules';

const Wrapper = styled('div')`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: ${(p) => p.theme.space * 2}px;
`;

const JobInfoList = (props) => (
  <Wrapper>
    <JobInfoItem />
    <JobInfoItem />
    <JobInfoItem />
  </Wrapper>
);

JobInfoList.propTypes = {
  //
};

export { JobInfoList };
