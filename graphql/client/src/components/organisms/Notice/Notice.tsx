import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import { Typography } from '../../atoms/Typography/Typography';

const Wrapper = styled.div`
    ${(props) => css`
        display: grid;
        box-sizing: border-box;
        padding: ${props.theme.space * 2}px ${props.theme.space * 3}px;
        border: 1px solid ${props.theme.colors.gray};
        border-radius: 8px;
    `}
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;
`;
const Date = styled.div`
    ${(props) => css`
        background-color: ${props.theme.colors.black};
        color: ${props.theme.colors.white};
        box-sizing: border-box;
        padding: 2px 4px;
        border-radius: 4px;
    `};
`;
const Desc = styled(Typography)`
    ${(props) => css`
        margin-top: ${props.theme.space * 2}px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
    `}
`;

interface IWrapper {}

export interface NoticeProps extends IWrapper {
    title: string;
    desc: string;
    createdAt: string;
}

export const Notice: React.FC<NoticeProps> = ({ title, desc, createdAt }) => {
    return (
        <Wrapper>
            <Top>
                <Typography variant={'medium'}>{title}</Typography>
                <Date>{createdAt}</Date>
            </Top>
            <Desc tag={'p'} variant={'small'}>
                {desc}
            </Desc>
        </Wrapper>
    );
};
