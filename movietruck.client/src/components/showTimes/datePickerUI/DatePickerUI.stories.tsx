import type { Meta, StoryObj } from "@storybook/react";
import DatePickerUI from "./DatePickerUI";
import { action } from "@storybook/addon-actions";

const meta: Meta<typeof DatePickerUI> = {
  component: DatePickerUI,
  args: {
    onSelectDate: action("Selected a date!"),
  },
};
export default meta;

type Story = StoryObj<typeof DatePickerUI>;

export const Primary: Story = {
  args: {
    dates: [
      "2025-06-10",
      "2025-06-11",
      "2025-06-12",
      "2025-06-13",
      "2025-06-14",
      "2025-06-15",
      "2025-06-16",
      "2025-06-17",
      "2025-06-18",
      "2025-06-19",
      "2025-06-20",
      "2025-06-21",
      "2025-07-10",
      "2025-07-11",
      "2025-07-12",
      "2025-07-13",
      "2025-07-14",
      "2025-07-15",
      "2025-07-16",
      "2025-07-17",
      "2025-07-18",
      "2025-07-19",
      "2025-07-20",
      "2025-07-21",
    ],
  },
};
