import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import InputField, { InputFieldProps } from "./InputField";
import "../../index.css";

const meta: Meta<InputFieldProps> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  parameters: {
    controls: { expanded: true },
  },
  args: {
    label: "Label",
    placeholder: "Type here...",
    variant: "outlined",
    size: "md",
  },
};
export default meta;
type Story = StoryObj<InputFieldProps>;

export const Default: Story = {};

export const Variants: Story = {
  render: (args) => (
    <div className="space-y-4">
      <InputField {...args} variant="outlined" />
      <InputField {...args} variant="filled" />
      <InputField {...args} variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: (args) => (
    <div className="space-y-4">
      <InputField {...args} size="sm" />
      <InputField {...args} size="md" />
      <InputField {...args} size="lg" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Disabled" placeholder="..." disabled helperText="Disabled field" />
      <InputField
        label="Invalid"
        placeholder="..."
        invalid
        errorMessage="This field is required"
      />
      <InputField label="Loading" placeholder="..." loading />
    </div>
  ),
};

export const WithExtras: Story = {
  render: () => {
    const [v, setV] = React.useState("Clear me");
    return (
      <div className="space-y-4">
        <InputField
          label="Clearable"
          value={v}
          onChange={(e) => setV(e.target.value)}
          clearable
        />
        <InputField
          label="Password"
          type="password"
          passwordToggle
          helperText="Use at least 8 characters"
        />
      </div>
    );
  },
};

export const HelperAndError: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField
        label="With helper"
        placeholder="..."
        helperText="This is a helper hint"
      />
      <InputField
        label="With error"
        placeholder="..."
        invalid
        errorMessage="Invalid input"
      />
      <InputField
        label="Error overrides helper"
        placeholder="..."
        invalid
        helperText="Helper text"
        errorMessage="Error wins"
      />
    </div>
  ),
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark bg-gray-900 p-4 space-y-4">
      <InputField
        {...args}
        label="Dark mode input"
        helperText="I adapt to dark mode"
      />
      <InputField
        {...args}
        label="Invalid dark"
        invalid
        errorMessage="Error message"
      />
    </div>
  ),
};
