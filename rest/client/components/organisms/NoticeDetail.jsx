import React from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser/index';
import { Desc } from '../atoms';

const NoticeDetail = ({ desc, view }) => (
  <div>
    <p>{view}</p>
    <Desc>{Parser(desc)}</Desc>
  </div>
);

NoticeDetail.propTypes = {
  desc: PropTypes.string.isRequired,
  view: PropTypes.number.isRequired,
};

export { NoticeDetail };
