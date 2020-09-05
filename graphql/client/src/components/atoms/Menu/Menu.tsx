import React from 'react';
import Link from 'next/link';
import styled, { css } from 'styled-components';
import { Typography } from '../Typography/Typography';

const Wrapper = styled.div<{
    display: MenuProps['display'];
    fontColor?: MenuProps['fontColor'];
    backgroundColor?: MenuProps['backgroundColor'];
}>`
    ${(p) => css`
        position: relative;
        box-sizing: border-box;
        padding: ${p.theme.space *2}px 0;
        display: ${p.display};
        align-items: center;
        color: ${p.fontColor};
        transition: all 1s ease-out;
        ${p.backgroundColor &&
        css`
            background-color: ${p.backgroundColor};
        `}
        &::after {
            content: '';
            width: 0;
            height: 1px;
            background-color: ${p.fontColor};
            position: absolute;
            bottom: 1px;
            transition: all 0.4s;
            z-index: 9999;
        }
        &:hover {
            &::after {
                width: 100%;
            }
        }
    `}
    a {
        width: 100%;
    }
`;

export interface MenuProps {
    display?: 'flex' | 'inline-flex';
    variant?: 'mainMenu' | 'subMenu';
    href?: string;
    fontColor?: string;
    backgroundColor?: string;
    text: string;
    onClick?: any;
}

export const Menu: React.FC<MenuProps> = ({
    display = 'flex',
    variant = 'mainMenu',
    fontColor = 'rgba(0,0,0,1)',
    backgroundColor,
    href = '#',
    text,
    onClick,
    ...props
}) => {
    return (
        <Wrapper onClick={onClick} display={display} fontColor={fontColor} backgroundColor={backgroundColor} {...props}>
            <Link href={href}>
                <a>
                    <Typography tag={'span'} variant={variant} display="block">
                        {text}
                    </Typography>
                </a>
            </Link>
        </Wrapper>
    );
};
