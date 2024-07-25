
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Beacon_Banner__Visionwomission } from './Beacon_Banner__Visionwomission';

const meta: Meta<typeof Beacon_Banner__Visionwomission> = {
  component: Beacon_Banner__Visionwomission,
};

export default meta;
type Story = StoryObj<typeof Beacon_Banner__Visionwomission>;

const Beacon_Banner__VisionwomissionWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Beacon_Banner__Visionwomission primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Beacon_Banner__VisionwomissionWithHooks />,
};
