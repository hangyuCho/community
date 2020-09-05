import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
    title: 'atoms/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
    label: 'Button',
    size: 'large',
};

export const Warning = Template.bind({});
Warning.args = {
    size: 'medium',
    label: 'Button',
    mode: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
    size: 'medium',
    label: 'Button',
    mode: 'danger',
};

export const Success = Template.bind({});
Success.args = {
    size: 'medium',
    label: 'Button',
    mode: 'success',
};

export const Loading = Template.bind({});
Loading.args = {
    size: 'medium',
    label: 'Button',
    loading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
    size: 'medium',
    label: 'Button',
    disabled: true,
};

export const Transparent = Template.bind({});
Transparent.args = {
    size: 'medium',
    label: 'Button',
    mode: 'transparent',
};
