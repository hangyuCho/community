import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Notice, NoticeProps } from './Notice';

export default {
    title: 'organisms/Notice',
    component: Notice,
} as Meta;

const Template: Story<NoticeProps> = (args) => <Notice {...args} />;

export const Default = Template.bind({});
Default.args = {
    title: 'Notice Title #1#1#1#1#1#1',
    desc: 'Notice Desc Notice Desc Notice Desc Notice Desc Notice Desc Notice Desc Notice Desc',
    createdAt: '20-09-06'
};
