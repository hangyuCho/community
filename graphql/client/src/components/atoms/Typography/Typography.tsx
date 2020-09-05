import React, { ElementType, ReactNode } from 'react';
import styled from 'styled-components';
import { theme } from '../../../styles/theme';
import { Theme } from '../../../../styled-components';

const Container = styled.div<TypographyProps | Theme>`
    color: ${(p) => p.color ?? p.theme.colors.black};
`;

export interface TypographyProps {
    variant?: keyof Theme['typography'];
    color?: string;
    tag?: ElementType;
    display?: 'initial' | 'block' | 'inline';
    children?: ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({ tag = 'span', variant = 'common', children, ...props }) => {
    const typoStyles = theme.typography[variant];
    return (
        <Container as={tag} style={typoStyles} {...props}>
            {children}
        </Container>
    );
};
