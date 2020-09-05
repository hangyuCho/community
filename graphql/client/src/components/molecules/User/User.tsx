import React from 'react';
import styled from 'styled-components';
import { Avatar } from '../../atoms/Avatar/Avatar';
import { Typography } from '../../atoms/Typography/Typography';

interface IWrapper {}

const Wrapper = styled.div<IWrapper>`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const CTypography = styled(Typography)`
    margin-top: ${(props) => props.theme.space}px;
`;

export interface UserProps extends IWrapper {
    src?: string;
    username?: string;
}

export const User: React.FC<UserProps> = ({ src, username = 'anonymous' }) => {
    return (
        <Wrapper>
            <Avatar src={src} fit={'contain'} />
            <CTypography variant={'small'}>{username}</CTypography>
        </Wrapper>
    );
};
