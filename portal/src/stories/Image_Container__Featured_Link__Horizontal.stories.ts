
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Image_Container__Featured_Link__Horizontal } from './Image_Container__Featured_Link__Horizontal';

const meta: Meta<typeof Image_Container__Featured_Link__Horizontal> = {
  component: Image_Container__Featured_Link__Horizontal,
};

export default meta;
type Story = StoryObj<typeof Image_Container__Featured_Link__Horizontal>;

const Image_Container__Featured_Link__HorizontalWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Image_Container__Featured_Link__Horizontal primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Image_Container__Featured_Link__HorizontalWithHooks />,
};
