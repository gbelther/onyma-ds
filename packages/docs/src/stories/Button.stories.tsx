import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@onyma-ds/react";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Clicar",
  },
  argTypes: {
    onClick: {
      action: "clicked",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj = {};
