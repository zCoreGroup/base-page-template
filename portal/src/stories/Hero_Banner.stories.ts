
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Hero_Banner } from './Hero_Banner';

const meta: Meta<typeof Hero_Banner> = {
  component: Hero_Banner,
};

export default meta;
type Story = StoryObj<typeof Hero_Banner>;

const Hero_BannerWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Hero_Banner primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Hero_BannerWithHooks />,
};
