
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Maintenance_Banner } from './Maintenance_Banner';

const meta: Meta<typeof Maintenance_Banner> = {
  component: Maintenance_Banner,
};

export default meta;
type Story = StoryObj<typeof Maintenance_Banner>;

const Maintenance_BannerWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Maintenance_Banner primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Maintenance_BannerWithHooks />,
};
