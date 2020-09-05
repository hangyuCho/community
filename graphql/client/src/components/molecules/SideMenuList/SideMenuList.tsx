import React, { useCallback, useContext } from 'react';
import { Menu } from '../../atoms/Menu/Menu';
import { CSSTransition } from 'react-transition-group';
import styled, { css } from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import {
    CurrentUserDocument,
    CurrentUserQuery,
    LogoutDocument,
    LogoutMutation,
} from '../../../generated/apolloComponents';
import { LayoutContext } from '../../../utils/Layout';

const Wrapper = styled.div`
    .menu-enter {
        opacity: 0;
        transform: translateX(-300px);
    }
    .menu-enter-active {
        opacity: 1;
        transform: translateX(0);
        transition: opacity 300ms, transform 300ms;
    }
    .menu-exit {
        opacity: 1;
    }
    .menu-exit-active {
        opacity: 0;
        transform: translateX(-300px);
        transition: opacity 300ms, transform 300ms;
    }
`;

const MenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 320px;
    height: 100%;
    background-color: #fafafa;
    z-index: 10000;
    padding: ${(props) => props.theme.space * 4}px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Common = styled.div`
    display: grid;
    ${({ theme }) => css`
        grid-gap: ${theme.space * 2}px;
    `};
`;
const Auth = styled.div`
    display: flex;
    justify-content: flex-end;
    ${({ theme }) => css`
        grid-gap: ${theme.space * 2}px;
    `};
`;

export interface SideMenuListProps {}

export const SideMenuList: React.FC<SideMenuListProps> = () => {
    const { setShowMenu, showMenu } = useContext(LayoutContext);
    const { data, loading } = useQuery<CurrentUserQuery>(CurrentUserDocument);
    const [logoutMutation] = useMutation<LogoutMutation>(LogoutDocument, {
        onError({ message }) {
            alert(message);
        },
        update(cache, { data }) {
            if (!data || !data.logout) {
                return;
            }
            cache.writeQuery({
                query: CurrentUserDocument,
                data: {
                    currentUser: data.logout,
                },
            });
        },
    });

    const onClickLogout = useCallback(async () => {
        setShowMenu(false);
        await logoutMutation();
    }, []);

    if (loading || !data) return <div>Loading ...</div>;

    const isLoggedIn = !!data?.currentUser;

    return (
        <Wrapper>
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="menu"
                unmountOnExit
                onEnter={() => setShowMenu(true)}
                onExited={() => setShowMenu(false)}
            >
                <MenuContainer>
                    <Common>
                        <Menu href={'/'} text={'Home'} onClick={() => setShowMenu(false)} />
                        <Menu href={'/'} text={'Notice'} onClick={() => setShowMenu(false)} />
                        <Menu href={'/'} text={'Post'} onClick={() => setShowMenu(false)} />
                        <Menu href={'/'} text={'Board'} onClick={() => setShowMenu(false)} />
                    </Common>
                    <Auth>
                        {isLoggedIn ? (
                            <>
                                <Menu
                                    variant={'subMenu'}
                                    href={'#'}
                                    text={'Profile'}
                                    onClick={() => setShowMenu(false)}
                                />
                                <Menu variant={'subMenu'} href={'#'} text={'Logout'} onClick={onClickLogout} />
                            </>
                        ) : (
                            <>
                                <Menu
                                    variant={'subMenu'}
                                    href={'/login'}
                                    text={'Login'}
                                    onClick={() => setShowMenu(false)}
                                />
                                <Menu
                                    variant={'subMenu'}
                                    href={'#'}
                                    text={'Register'}
                                    onClick={() => setShowMenu(false)}
                                />
                            </>
                        )}
                    </Auth>
                </MenuContainer>
            </CSSTransition>
        </Wrapper>
    );
};
