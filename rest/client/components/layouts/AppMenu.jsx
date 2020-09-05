import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { AppHeader } from '.';
import { logOutRequestAction } from '../../store/actions/user/logout.action';
import { UserInfo } from '../molecules';
import { clearUserAction } from '../../store/actions/user/clearUser.action';

const Wrapper = styled('div')`
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
  .menu__background-enter {
    opacity: 0;
  }
  .menu__background-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .menu__background-exit {
    opacity: 1;
  }
  .menu__background-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const MenuBackground = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 9999;
`;

const Menu = styled('div')`
  position: fixed;
  left: 0;
  top: 0;
  width: 320px;
  height: 100%;
  background-color: #fafafa;
  z-index: 10000;
  padding: ${(props) => props.theme.space * 2}px;
`;

const LoggedIn = styled('div')`
  display: flex;
  padding: ${(props) => props.theme.space}px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
`;

const CUserInfo = styled(UserInfo)`
  width: 100px;
`;

const LoggedInNav = styled('nav')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Auth = styled.div`
  text-transform: uppercase;
  margin: ${(props) => `${props.theme.space}px`};
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const AppMenu = (props) => {
  const router = useRouter();
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();
  const { me, loadMeDone, logOutDone } = useSelector(
    (state) => state.userReducer
  );
  const [logOutCounter, setLogOutCounter] = useState(0);
  const onClickLogOut = useCallback(() => {
    setLogOutCounter((prev) => prev + 1);
  }, []);

  const onClickCloseMenu = useCallback(() => {
    setShowMessage(false);
  }, []);

  useEffect(() => {
    if (logOutCounter > 0) {
      dispatch(logOutRequestAction());
    }
  }, [dispatch, logOutCounter]);

  useEffect(() => {
    if (logOutDone) {
      dispatch(clearUserAction());
      onClickCloseMenu();
    }
  }, [logOutDone]);

  return (
    <Wrapper>
      <AppHeader onClick={() => setShowMessage(true)} />
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="menu"
        unmountOnExit
        onEnter={() => setShowMessage(true)}
        onExited={() => setShowMessage(false)}
      >
        <Menu>
          {me && loadMeDone && (
            <LoggedIn>
              <CUserInfo username={me.username} />
              <LoggedInNav>
                <Auth onClick={onClickCloseMenu}>
                  <Link href="/profile">
                    <a>프로필</a>
                  </Link>
                </Auth>
                <Auth onClick={onClickLogOut}>
                  <a style={{ cursor: 'pointer' }}>Logout</a>
                </Auth>
              </LoggedInNav>
            </LoggedIn>
          )}
          {!me && (
            <>
              <Auth onClick={onClickCloseMenu}>
                <Link href="/login">
                  <a>LOGIN</a>
                </Link>
              </Auth>
              <Auth onClick={onClickCloseMenu}>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </Auth>
            </>
          )}
          <Auth onClick={onClickCloseMenu}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Auth>
          <Auth onClick={onClickCloseMenu}>
            <Link href="/notice">
              <a>Notice</a>
            </Link>
          </Auth>
          <Auth onClick={onClickCloseMenu}>
            <Link href="/post">
              <a>POST</a>
            </Link>
          </Auth>
          <Auth onClick={onClickCloseMenu}>
            <Link href="/job">
              <a>JOB INFO</a>
            </Link>
          </Auth>
        </Menu>
      </CSSTransition>
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="menu__background"
        unmountOnExit
        onEnter={() => setShowMessage(true)}
        onExited={() => setShowMessage(false)}
      >
        <MenuBackground onClick={() => setShowMessage(false)} />
      </CSSTransition>
    </Wrapper>
  );
};

AppMenu.propTypes = {
  //
};

export { AppMenu };
