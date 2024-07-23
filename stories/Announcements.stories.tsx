import React from 'react';
import Announcements from '../portal/src/components/announcements/announcements';
import { AnnouncementsData } from '@/types';

export default {
    title: 'Components/Announcements',
    component: Announcements,
};

const Template = (args) => <Announcements {...args} />;

export const Default = Template.bind({});
Default.args = {
    data: {
        announcements: [
            { image: 'https://via.placeholder.com/400', title: 'Announcement 1', description: 'This is the first announcement.' },
            { image: 'https://via.placeholder.com/400', title: 'Announcement 2', description: 'This is the second announcement.' },
        ],
    },
};