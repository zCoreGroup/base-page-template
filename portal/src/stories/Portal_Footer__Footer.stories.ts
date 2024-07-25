
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Portal_Footer__Footer } from './Portal_Footer__Footer';

const meta: Meta<typeof Portal_Footer__Footer> = {
  component: Portal_Footer__Footer,
};

export default meta;
type Story = StoryObj<typeof Portal_Footer__Footer>;

const Portal_Footer__FooterWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Portal_Footer__Footer primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Portal_Footer__FooterWithHooks />,
};
