import "../app/globals.scss";

import { Meta, StoryFn } from "@storybook/react";
import Select, { Posts } from "../app/components/Select/Select";

import { ThemeContext } from "../app/contexts/ThemeContext";
import { action } from "@storybook/addon-actions";

const meta: Meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    onChange: action("Changed"),
  },
};

export default meta;

const Template: StoryFn<Posts> = (args) => {
  const handleSortChange = (selectedValue: string) => {
    action("onChange")(selectedValue);
    console.log(`Selected value: ${selectedValue}`);
  };
  return (
    <ThemeContext.Provider value={{ theme: "light", setTheme: () => {} }}>
      <Select {...args} handleSortChange={handleSortChange} />
    </ThemeContext.Provider>
  );
};

export const Default = Template.bind({});
