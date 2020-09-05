import React, { useContext } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { LayoutContext } from '../../../utils/Layout';

const Wrapper = styled.div`
    .menu__backdrop-enter {
        opacity: 0;
    }
    .menu__backdrop-enter-active {
        opacity: 1;
        transition: opacity 300ms;
    }
    .menu__backdrop-exit {
        opacity: 1;
    }
    .menu__backdrop-exit-active {
        opacity: 0;
        transition: opacity 300ms;
    }
`;

const Content = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
`;

export interface BackdropProps {}

export const Backdrop: React.FC<BackdropProps> = () => {
    const { setShowMenu, showMenu } = useContext(LayoutContext);
    return (
        <Wrapper onClick={() => setShowMenu(false)}>
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu__backdrop"
                unmountOnExit
                onEnter={() => setShowMenu(true)}
                onExited={() => setShowMenu(false)}
            >
                <Content />
            </CSSTransition>
        </Wrapper>
    );
};

export default Backdrop;
