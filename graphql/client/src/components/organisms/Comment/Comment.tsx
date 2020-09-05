import React from 'react';
import styled, { css, useTheme } from 'styled-components';
import { User } from '../../molecules/User/User';
import { Typography } from '../../atoms/Typography/Typography';
import { Button } from '../../atoms/Button/Button';

interface IWrapper {}

interface IContents {}

interface IButtons {}

const Wrapper = styled.div`
    ${(props) => css`
        box-sizing: border-box;
        padding: 2rem;
        display: flex;
        border: 1px solid ${props.theme.colors.gray};
        border-radius: 8px;
        grid-gap: 30px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07), 0 4px 8px rgba(0, 0, 0, 0.07),
            0 8px 16px rgba(0, 0, 0, 0.07), 0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
        &:not(:last-of-type) {
            margin-bottom: ${props.theme.space}px;
        }
    `}
`;
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const CTypography = styled(Typography)`
    &:not(:last-of-type) {
        margin-bottom: ${(props) => props.theme.space}px;
    }
`;

const Desc = styled(CTypography)`
    line-height: 1.4;
`;

const Buttons = styled.div`
    display: flex;
    flex-direction: column;
    grid-gap: 8px;
    align-self: center;
`;

export interface CommentProps extends IWrapper, IContents, IButtons {
    desc: string;
    isAuthor: boolean;
}

export const Comment: React.FC<CommentProps> = ({ desc, isAuthor = false }) => {
    const theme = useTheme();
    return (
        <Wrapper>
            <User
                src={
                    'https://img.extmovie.com/files/attach/images/174/500/322/005/b8a36bfbe9ab62a7e89ff08505d49adf.png'
                }
                username={'Ricky'}
            />
            <Contents>
                <Desc variant={'desc'}>{desc}</Desc>
            </Contents>
            {isAuthor && (
                <Buttons>
                    <Button mode={'primary'} size={'small'} fontColor={theme.colors.white} label={'수정'} />
                    <Button mode={'danger'} size={'small'} fontColor={theme.colors.white} label={'삭제'} />
                </Buttons>
            )}
        </Wrapper>
    );
};
