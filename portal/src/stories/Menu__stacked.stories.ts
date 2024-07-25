
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Menu__stacked } from './Menu__stacked';

const meta: Meta<typeof Menu__stacked> = {
  component: Menu__stacked,
};

export default meta;
type Story = StoryObj<typeof Menu__stacked>;

const Menu__stackedWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Menu__stacked primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Menu__stackedWithHooks />,
};
