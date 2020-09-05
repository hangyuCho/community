import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { PageLayout, PageLayoutProps } from './PageLayout';

export default {
    title: 'layouts/PageLayout',
    component: PageLayout,
} as Meta;

const Template: Story<PageLayoutProps> = (args) => <PageLayout {...args} />;

export const InlinePageLayout = Template.bind({});
InlinePageLayout.args = {
    title: 'Story Page',
};
