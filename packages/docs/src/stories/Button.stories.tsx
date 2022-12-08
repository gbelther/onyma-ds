import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "@onyma-ds/react";
import { colors } from "@onyma-ds/tokens";

export default {
  title: "Button",
  component: Button,
  args: {
    children: "Enviar formulário",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: Object.keys(colors),
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    ghost: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      action: "clicked",
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj = {};
