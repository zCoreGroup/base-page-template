import React from 'react';
import Banner from '../portal/src/components/banner/banner';

export default {
    title: 'Components/Banner',
    component: Banner,
};

const Template = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add necessary props here
};