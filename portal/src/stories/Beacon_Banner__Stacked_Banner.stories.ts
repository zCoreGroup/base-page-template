
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Beacon_Banner__Stacked_Banner } from './Beacon_Banner__Stacked_Banner';

const meta: Meta<typeof Beacon_Banner__Stacked_Banner> = {
  component: Beacon_Banner__Stacked_Banner,
};

export default meta;
type Story = StoryObj<typeof Beacon_Banner__Stacked_Banner>;

const Beacon_Banner__Stacked_BannerWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Beacon_Banner__Stacked_Banner primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Beacon_Banner__Stacked_BannerWithHooks />,
};
