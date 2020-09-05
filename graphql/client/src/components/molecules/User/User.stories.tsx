import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { User, UserProps } from './User';

export default {
    title: 'molecules/User',
    component: User,
} as Meta;

const Template: Story<UserProps> = (args) => <User {...args} />;

export const Default = Template.bind({});
Default.args = {
    src:
        'https://mblogthumb-phinf.pstatic.net/20160705_184/free-draw_1467694191780zEKXB_PNG/penguin-160159_1280.png?type=w800',
    username: '짬뽕',
};
