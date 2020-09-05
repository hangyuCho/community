import React from 'react';
import { Backdrop } from '../../molecules/Backdrop/Backdrop';
import { SideMenuList } from '../../molecules/SideMenuList/SideMenuList';
import styled from 'styled-components';

const Wrapper = styled.aside``;

export interface SideBarProps {}

export const SideBar: React.FC<SideBarProps> = () => {
    return (
        <Wrapper>
            <SideMenuList />
            <Backdrop />
        </Wrapper>
    );
};
