
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Menu__Default } from './Menu__Default';

const meta: Meta<typeof Menu__Default> = {
  component: Menu__Default,
};

export default meta;
type Story = StoryObj<typeof Menu__Default>;

const Menu__DefaultWithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <Menu__Default primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <Menu__DefaultWithHooks />,
};
