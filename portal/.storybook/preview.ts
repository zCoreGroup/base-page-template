import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    zeplinLink: "https://app.zeplin.io/project/669aa99836c7f2ad93ce967a",
  },
  tags: ['autodocs'],
};

export default preview;
