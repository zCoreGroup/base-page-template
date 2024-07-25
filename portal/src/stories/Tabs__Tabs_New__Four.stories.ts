
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Tabs__Tabs_New__Four } from './Tabs__Tabs_New__Four';

const meta: Meta<typeof Tabs__Tabs_New__Four> = {
  component: Tabs__Tabs_New__Four,
};

export default meta;
type Story = StoryObj<typeof Tabs__Tabs_New__Four>;

const Tabs__Tabs_New__FourWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Tabs__Tabs_New__Four primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Tabs__Tabs_New__FourWithHooks />,
};
