import React from 'react';
import Footer from '../portal/src/components/footer/footer';

export default {
    title: 'Components/Footer',
    component: Footer,
};

const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add necessary props here
};