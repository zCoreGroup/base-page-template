
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Beacon_Banner__WideBanner } from './Beacon_Banner__WideBanner';

const meta: Meta<typeof Beacon_Banner__WideBanner> = {
  component: Beacon_Banner__WideBanner,
};

export default meta;
type Story = StoryObj<typeof Beacon_Banner__WideBanner>;

const Beacon_Banner__WideBannerWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Beacon_Banner__WideBanner primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Beacon_Banner__WideBannerWithHooks />,
};
