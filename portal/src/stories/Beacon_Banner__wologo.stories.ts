
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Beacon_Banner__wologo } from './Beacon_Banner__wologo';

const meta: Meta<typeof Beacon_Banner__wologo> = {
  component: Beacon_Banner__wologo,
};

export default meta;
type Story = StoryObj<typeof Beacon_Banner__wologo>;

const Beacon_Banner__wologoWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Beacon_Banner__wologo primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Beacon_Banner__wologoWithHooks />,
};
