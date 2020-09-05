import React, { useContext } from 'react';
import Icon from '../../atoms/Icon/Icon';
import { Face, Menu } from '@material-ui/icons';
import { Typography } from '../../atoms/Typography/Typography';
import styled from 'styled-components';
import { LayoutContext } from '../../../utils/Layout';

const Wrapper = styled.header`
    width: 100%;
    height: 48px;
    display: grid;
    grid-template-columns: 1fr 8fr 1fr;
    align-items: center;
    justify-items: center;
    > div {
        display: flex;
        align-items: center;
        > svg {
            font-size: 2rem;
            cursor: pointer;
        }
    }
`;

export interface HeaderProps {
    title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
    const { setShowMenu } = useContext(LayoutContext);
    return (
        <Wrapper>
            <Icon pointer onClick={() => setShowMenu(true)}>
                <Menu />
            </Icon>
            <Typography>{title}</Typography>
            <Icon pointer onClick={() => alert('onClick Icon')}>
                <Face />
            </Icon>
        </Wrapper>
    );
};
