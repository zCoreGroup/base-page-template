
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Sub_Page_Menu } from './Sub_Page_Menu';

const meta: Meta<typeof Sub_Page_Menu> = {
  component: Sub_Page_Menu,
};

export default meta;
type Story = StoryObj<typeof Sub_Page_Menu>;

const Sub_Page_MenuWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Sub_Page_Menu primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Sub_Page_MenuWithHooks />,
};
