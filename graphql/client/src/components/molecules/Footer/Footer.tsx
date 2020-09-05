import React from 'react';
import styled from 'styled-components';
import { Typography } from '../../atoms/Typography/Typography';

const Wrapper = styled.footer`
    height: ${(p) => p.theme.appFooter};
    background-color:  ${(p) => p.theme.colors.black};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
    return (
        <Wrapper>
            <Typography color={'#FFFFFF'}>ⓒ Tama Corp.</Typography>
        </Wrapper>
    );
};
