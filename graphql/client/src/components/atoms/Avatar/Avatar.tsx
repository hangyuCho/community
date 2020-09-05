import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

interface IWrapper {
    size?: number;
    backgroundColor?: string;
}

interface IAvatarImage {
    fit?: 'fill' | 'contain' | 'cover';
}

const Wrapper = styled.div<IWrapper>`
    ${(props) => css`
        box-sizing: border-box;
        padding: ${props.theme.space / 2}px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${props.size}px;
        height: ${props.size}px;
        overflow: hidden;
        border-radius: 50%;
        border: none;
        box-shadow: 1px 1px 5px 0px rgba(50, 50, 50, 0.75);
        ${props.backgroundColor && `background-color: ${props.backgroundColor}`};
    `};
`;

const AvatarImage = styled.img<IAvatarImage>`
    ${(props) => css`
        width: 100%;
        height: 100%;
        object-fit: ${props.fit};
    `};
`;

export interface AvatarProps extends IWrapper, IAvatarImage {
    src?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, backgroundColor, size = 40, fit = 'contain', ...props }) => {
    const imageSrc =
        src ?? 'https://stickershop.line-scdn.net/stickershop/v1/product/8823/LINEStorePC/main.png;compress=true';
    return (
        <Wrapper size={size} backgroundColor={backgroundColor} {...props}>
            <AvatarImage src={imageSrc} alt={'avatar'} fit={fit} />
        </Wrapper>
    );
};
