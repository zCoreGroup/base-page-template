
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs__Tabs_New__Three } from './Tabs__Tabs_New__Three';

const meta: Meta<typeof Tabs__Tabs_New__Three> = {
  component: Tabs__Tabs_New__Three,
};

export default meta;
type Story = StoryObj<typeof Tabs__Tabs_New__Three>;

const Tabs__Tabs_New__ThreeWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Tabs__Tabs_New__Three primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Tabs__Tabs_New__ThreeWithHooks />,
};
