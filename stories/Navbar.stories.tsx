import React from 'react';
import Navbar from '../portal/src/components/navbar/Navbar';

export default {
    title: 'Components/Navbar',
    component: Navbar,
};

const Template = (args) => <Navbar {...args} />;

export const Default = Template.bind({});
Default.args = {
    // Add necessary props here
};