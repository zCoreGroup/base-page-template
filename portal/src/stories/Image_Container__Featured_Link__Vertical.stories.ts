
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Image_Container__Featured_Link__Vertical } from './Image_Container__Featured_Link__Vertical';

const meta: Meta<typeof Image_Container__Featured_Link__Vertical> = {
  component: Image_Container__Featured_Link__Vertical,
};

export default meta;
type Story = StoryObj<typeof Image_Container__Featured_Link__Vertical>;

const Image_Container__Featured_Link__VerticalWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Image_Container__Featured_Link__Vertical primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Image_Container__Featured_Link__VerticalWithHooks />,
};
