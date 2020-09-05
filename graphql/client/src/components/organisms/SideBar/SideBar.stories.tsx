import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { SideBar, SideBarProps } from './SideBar';

export default {
    title: 'organisms/SideBar',
    component: SideBar,
} as Meta;

const Template: Story<SideBarProps> = (args) => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = {
    setShowMenu: () => {},
    showMenu: true,
};
