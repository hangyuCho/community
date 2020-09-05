import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography, TypographyProps } from './Typography';

export default {
    title: 'atoms/Typography',
    component: Typography,
    argTypes: {
        color: { control: 'color' },
    },
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const Common = Template.bind({});
Common.args = {
    color: 'red',
    display: 'block',
    tag: 'h1',
    variant: 'common',
    children: 'Common Typography',
};

export const Title = Template.bind({});
Title.args = {
    display: 'block',
    tag: 'h1',
    variant: 'title',
    children: 'Title Typography',
};

export const Desc = Template.bind({});
Desc.args = {
    display: 'block',
    tag: 'h1',
    variant: 'desc',
    children: 'Desc Typography',
};

export const MainMenu = Template.bind({});
MainMenu.args = {
    display: 'block',
    tag: 'h1',
    variant: 'mainMenu',
    children: 'mainMenu Typography',
};

export const SubMenu = Template.bind({});
SubMenu.args = {
    display: 'block',
    tag: 'h1',
    variant: 'subMenu',
    children: 'subMenu Typography',
};
