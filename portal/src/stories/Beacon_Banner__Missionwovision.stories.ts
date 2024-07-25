
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Beacon_Banner__Missionwovision } from './Beacon_Banner__Missionwovision';

const meta: Meta<typeof Beacon_Banner__Missionwovision> = {
  component: Beacon_Banner__Missionwovision,
};

export default meta;
type Story = StoryObj<typeof Beacon_Banner__Missionwovision>;

const Beacon_Banner__MissionwovisionWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Beacon_Banner__Missionwovision primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Beacon_Banner__MissionwovisionWithHooks />,
};
