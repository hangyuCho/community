import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Comment, CommentProps } from './Comment';

export default {
    title: 'organisms/Comment',
    component: Comment,
} as Meta;

const Template: Story<CommentProps> = (args) => <Comment {...args} />;

export const Default = Template.bind({});
Default.args = {
    desc:
        'desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1',
};

export const Author = Template.bind({});
Author.args = {
    desc:
        'desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1 desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1desc #1',
    isAuthor: true,
};
