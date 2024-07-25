
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs__Tabs_New__Double } from './Tabs__Tabs_New__Double';

const meta: Meta<typeof Tabs__Tabs_New__Double> = {
  component: Tabs__Tabs_New__Double,
};

export default meta;
type Story = StoryObj<typeof Tabs__Tabs_New__Double>;

const Tabs__Tabs_New__DoubleWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Tabs__Tabs_New__Double primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Tabs__Tabs_New__DoubleWithHooks />,
};
