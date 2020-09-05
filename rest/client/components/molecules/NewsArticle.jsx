import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled('div')`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;

const Title = styled('h6')`
  font-size: 0.8rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const Content = styled('p')`
  word-break: break-all;
  font-size: 0.4rem;
`;
const Press = styled('p')`
  font-size: 0.4rem;
  text-align: right;
`;

const NewsArticle = ({ onClickNews }) => (
  <Wrapper onClick={onClickNews('https://naver.com')}>
    <Title>SKT-삼성전자, 블록체인 기술로 갤럭시폰 ‘이중보안’</Title>
    <Content>
      "기안84[아시아경제 부애리 기자] 웹툰작가 기안84가 연재하는 웹툰 '복학왕'의
      여성혐오 논란이 쉽사리 수그러들지 않고 있는 가운데, 네이버의 고심도
      깊어지고 있다.22일 네이버에 따르면 네이버웹툰은 '복학왕' 논란을 계기로
      모니터링과 이용자 의견 청취를 더욱 더 강화하기로 했다.
    </Content>
    <Press>- 스포츠경향</Press>
  </Wrapper>
);

NewsArticle.propTypes = {
  onClickNews: PropTypes.func.isRequired,
};

export { NewsArticle };
