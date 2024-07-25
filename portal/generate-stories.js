const fs = require('fs');
const path = require('path');

// Define your template for the story
const storyTemplate = (componentName) => `
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ${componentName} } from './${componentName}';

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
};

export default meta;
type Story = StoryObj<typeof ${componentName}>;

const ${componentName}WithHooks = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return <${componentName} primary={isPrimary} onClick={handleOnChange} label={value} />;
};

export const Primary: Story = {
  render: () => <${componentName}WithHooks />,
};
`;

// Function to generate the story file
const generateStory = (componentName) => {
  const storyContent = storyTemplate(componentName);
  const outputDir = path.join(__dirname, 'src', 'stories');
  const outputFile = path.join(outputDir, `${componentName}.stories.ts`);

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputFile, storyContent, 'utf8');
  console.log(`Generated ${componentName}.stories.ts in ${outputDir}`);
};

// Read the components (assuming component names are known and hardcoded for this example)
const components = ['Button', 'Input', 'Header']; // Add your component names here
components.forEach((componentName) => {
  generateStory(componentName);
});
