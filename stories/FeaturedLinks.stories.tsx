import React from 'react';
import FeaturedLinks from '../portal/src/components/featuredlinks/featuredlinks';
import { FeaturedLinksData } from '@/types';

export default {
    title: 'Components/FeaturedLinks',
    component: FeaturedLinks,
};

const Template = (args) => <FeaturedLinks {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        links: [
            { url: 'https://example.com', title: 'Link 1', description: 'This is the first link.' },
            { url: 'https://example.com', title: 'Link 2', description: 'This is the second link.' },
        ],
    },
};