import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Avatar, AvatarProps } from './Avatar';

export default {
    title: 'atoms/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args}></Avatar>;

const src =
    'https://mblogthumb-phinf.pstatic.net/20160705_267/free-draw_1467694191528LI4PI_PNG/animal-160760_1280.png?type=w800';

export const Default = Template.bind({});
Default.args = {};

export const AddSrc = Template.bind({});
AddSrc.args = {
    src,
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
    backgroundColor: 'black',
    src,
};

export const Fit = Template.bind({});
Fit.args = {
    fit: 'cover',
    src,
};

export const Size = Template.bind({});
Size.args = {
    src,
    size: 80,
};
