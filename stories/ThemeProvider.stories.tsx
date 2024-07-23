import React from 'react';
import ThemeProvider from '../portal/src/components/themeprovider/themeprovider';

export default {
    title: 'Components/ThemeProvider',
    component: ThemeProvider,
};

const Template = (args) => <ThemeProvider {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add necessary props here
};