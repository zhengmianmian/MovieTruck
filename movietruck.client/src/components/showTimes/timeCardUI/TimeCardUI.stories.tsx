import type { Meta, StoryObj } from "@storybook/react";
import TimeCardUI from "./TimeCardUI";
import { Box } from "@mui/material";

const meta: Meta<typeof TimeCardUI> = {
  component: TimeCardUI,
  decorators: [
    (Story) => (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh", // Adjust height as needed
        }}
      >
        <Story />
      </Box>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof TimeCardUI>;

export const Primary: Story = {
  args: {
    time: "3:30 PM",
    seatsAvailable: 219,
  },
};
