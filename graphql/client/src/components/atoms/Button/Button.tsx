import React from 'react';
import styled, { css } from 'styled-components';
import CachedIcon from '@material-ui/icons/Cached';
import Icon from '../Icon/Icon';
import { handlerBackgroundColor, handlerFontSize } from './utils';

export interface ButtonProps {
    /**
     * 버튼의 모드
     */
    mode?: 'primary' | 'danger' | 'success' | 'warning' | 'transparent';
    /**
     * 버튼내부 패딩
     */
    padding?: string;
    /**
     * 버튼 display
     */
    display?: 'inline-flex' | 'flex';
    /**
     * 버튼 글자색상
     */
    fontColor?: string;
    /**
     * 버튼 글자size
     */
    fontSize?: string;
    /**
     * 버튼색상
     */
    backgroundColor?: string;
    /**
     * 버튼 글자 크기
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * 버튼 내부 스트링
     */
    label?: string;
    /**
     * 온클릭함수
     */
    onClick?: () => void;
    /**
     * 로딩아이콘 표시 유무
     */
    loading?: boolean;
    /**
     * disabled
     */
    disabled?: boolean;
}

const Wrapper = styled.button<ButtonProps>`
    ${(props) => css`
        transition: 0.6s;
        overflow: hidden;
        position: relative;
        box-sizing: border-box;
        align-items: center;
        background-color: ${props.backgroundColor};
        border-radius: ${props.theme.space / 2}px;
        padding: ${props.padding};
        display: ${props.display};
        background-color: ${handlerBackgroundColor(props.theme.alert, props.mode)};
        font-size: ${handlerFontSize(props.size)};
        ${props.backgroundColor &&
        css`
            background-color: ${props.backgroundColor};
        `}
        ${props.fontSize &&
        css`
            font-size: ${props.fontSize};
        `}
        ${props.disabled &&
        css`
            background-color: ${props.theme.colors.gray};
            color: ${props.theme.colors.white};
            pointer-events: none;
        `}
            ${props.loading &&
        css`
            background-color: ${props.theme.colors.gray};
            color: ${props.theme.colors.white};
            pointer-events: none;
        `};
        &:focus {
            outline: 0;
        }
        &:before {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.5);
            width: 60px;
            height: 100%;
            left: 0;
            top: 0;
            opacity: 0.5;
            filter: blur(30px);
            transform: translateX(-100px) skewX(-15deg);
        }
        &:after {
            content: '';
            display: block;
            position: absolute;
            background: rgba(255, 255, 255, 0.2);
            width: 30px;
            height: 100%;
            left: 30px;
            top: 0;
            opacity: 0;
            filter: blur(5px);
            transform: translateX(-100px) skewX(-15deg);
        }
        &:hover {
            cursor: pointer;
            background-color: ${handlerBackgroundColor(props.theme.alert, props.mode, true)};

            &:before {
                transform: translateX(300px) skewX(-15deg);
                opacity: 0.6;
                transition: 1.2s;
            }
            &:after {
                transform: translateX(300px) skewX(-15deg);
                opacity: 1;
                transition: 1.2s;
            }
        }
        color: ${props.fontColor ?? props.theme.colors.white};
    `}
`;

/**
 * 버튼 입니다.
 */
export const Button: React.FC<ButtonProps> = ({
    mode = 'primary',
    size = 'medium',
    backgroundColor,
    fontColor = '#FFFFFF',
    fontSize,
    label,
    loading = false,
    disabled = false,
    display = 'inline-flex',
    padding = '0.6em 1.2em',
    ...props
}) => {
    return (
        <Wrapper
            type="button"
            mode={mode}
            size={size}
            fontColor={fontColor}
            fontSize={fontSize}
            backgroundColor={backgroundColor}
            disabled={disabled}
            loading={loading}
            padding={padding}
            display={display}
            {...props}
        >
            {loading && (
                <Icon rotationLeft>
                    <CachedIcon />
                </Icon>
            )}
            {label}
        </Wrapper>
    );
};
