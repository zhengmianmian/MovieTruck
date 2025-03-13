// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import Header from "./Header";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof Header> = {
  component: Header,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Primary: Story = {
  args: {},
};
