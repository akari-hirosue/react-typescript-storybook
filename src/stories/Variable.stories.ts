import type { Meta } from "@storybook/react";

export default {
  title: "Simple Component",
  parameters: {
    cssprops: {
      "css-custom-property-1": {
        value: "hsl(120deg 100% 25% / 49%)",
        description: "Optional description",
      },
    },
  },
} as Meta;
