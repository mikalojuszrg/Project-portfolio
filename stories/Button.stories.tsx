import Button, { Props } from "../app/components/Button/Button";
import { Meta, StoryFn } from "@storybook/react";

import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    //   children: {
    //     defaultValue: "Default text",
    //   },
  },
};

export default meta;

const Template: StoryFn<Props> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary text",
  onClick: action("Secondary click"),
};
