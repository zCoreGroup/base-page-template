import { ComponentMeta, ComponentStory } from '@storybook/react';
import BeaconBanner from './BeaconBanner';

export default {
  title: 'Components/BeaconBanner',
  component: BeaconBanner,
} as ComponentMeta<typeof BeaconBanner>;

const Template: ComponentStory<typeof BeaconBanner> = (args) => <BeaconBanner {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add default props here
  message: 'This is a default beacon banner message',
  type: 'info',
  isVisible: true,
};

export const Warning = Template.bind({});
Warning.args = {
  message: 'This is a warning beacon banner',
  type: 'warning',
  isVisible: true,
};

export const Error = Template.bind({});
Error.args = {
  message: 'This is an error beacon banner',
  type: 'error',
  isVisible: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  message: 'This banner is hidden',
  type: 'info',
  isVisible: false,
};
