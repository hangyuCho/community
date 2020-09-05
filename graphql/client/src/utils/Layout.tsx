import React, { useState, createContext } from 'react';

export interface ILayoutContext {
    showMenu: boolean;
    setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LayoutContext = createContext<ILayoutContext>({
    showMenu: false,
    setShowMenu: () => {},
});

export const LayoutProvider: React.FC<any> = ({ children }) => {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const store = {
        showMenu,
        setShowMenu,
    };
    return <LayoutContext.Provider value={store}>{children}</LayoutContext.Provider>;
};
