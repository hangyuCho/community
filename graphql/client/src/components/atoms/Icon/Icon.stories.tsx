import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import AdbIcon from '@material-ui/icons/Adb';

import { Icon, IconProps } from './Icon';

export default {
    title: 'atoms/Icon',
    component: Icon,
} as Meta;

const Template: Story<IconProps> = (args) => (
    <Icon {...args}>
        <AdbIcon />
    </Icon>
);

export const Default = Template.bind({});
Default.args = {};

export const PointerIcon = Template.bind({});
PointerIcon.args = {
    onClick: () => alert('clicked'),
    pointer: true,
};

export const RotationLeftIcon = Template.bind({});
RotationLeftIcon.args = {
    onClick: () => alert('clicked'),
    rotationLeft: true,
};

export const RotationRightIcon = Template.bind({});
RotationRightIcon.args = {
    onClick: () => alert('clicked'),
    rotationRight: true,
};
