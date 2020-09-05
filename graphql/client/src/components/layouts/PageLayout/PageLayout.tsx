import React from 'react';
import { SideBar } from '../../organisms/SideBar/SideBar';
import styled, { css } from 'styled-components';
import { mq } from '../../../styles/mq';
import { Footer } from '../../molecules/Footer/Footer';
import { Header } from '../../molecules/Header/Header';
import { LayoutProvider } from '../../../utils/Layout';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    ${mq('dt')`
        width: 640px;
        margin: 0 auto;
    `};
    ${({ theme }) => css`
        grid-template-rows:
            ${theme.appHeader}
            minmax(calc(100vh - ${theme.appHeader} - ${theme.appFooter}), 1fr)
            ${theme.appFooter};
    `};
`;

export interface PageLayoutProps {
    title: string;
}

export const PageLayout: React.FC<PageLayoutProps> = ({ title, children }) => {
    return (
        <LayoutProvider>
            <SideBar />
            <Wrapper>
                <Header title={title} />
                <main>{children}</main>
                <Footer />
            </Wrapper>
        </LayoutProvider>
    );
};
