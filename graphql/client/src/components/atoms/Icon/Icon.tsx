import React from 'react';
import styled, { css } from 'styled-components';
import { rotate } from '../../../styles/rotate';

const Wrapper = styled.span<{
    rotationLeft: IconProps['rotationLeft'];
    rotationRight: IconProps['rotationRight'];
    pointer: IconProps['pointer'];
}>`
    ${(props) => css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: ${props.theme.space}px;
        margin-left: -${props.theme.space / 2}px;
    `};
    ${(props) => {
        if (props.rotationLeft) {
            return css`
                animation: ${rotate('left')} 1s infinite;
            `;
        } else if (props.rotationRight) {
            return css`
                animation: ${rotate('right')} 1s infinite;
            `;
        }
    }};
    ${(props) => {
        if (props.pointer) {
            return css`
                cursor: pointer;
            `;
        } else {
            return css`
                pointer-events: none;
            `;
        }
    }};
`;

export interface IconProps {
    onClick?: any;
    rotationLeft?: boolean;
    rotationRight?: boolean;
    pointer?: boolean;
}

export const Icon: React.FC<IconProps> = ({
    onClick,
    rotationLeft = false,
    pointer = false,
    rotationRight = false,
    children,
}) => {
    return (
        <Wrapper onClick={onClick} rotationLeft={rotationLeft} rotationRight={rotationRight} pointer={pointer}>
            {children}
        </Wrapper>
    );
};

export default Icon;
