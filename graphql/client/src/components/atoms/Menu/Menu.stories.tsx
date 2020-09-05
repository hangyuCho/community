import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Menu, MenuProps } from './Menu';

export default {
    title: 'atoms/Menu',
    component: Menu,
    argTypes: {
        backgroundColor: { control: 'color' },
        fontColor: { control: 'color' },
    },
} as Meta;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'Menu1',
};
