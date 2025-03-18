import type { Meta, StoryObj } from "@storybook/react";
import TimesCardUI from "./TimesCardUI";
const meta: Meta<typeof TimesCardUI> = {
  component: TimesCardUI,
};
export default meta;

type Story = StoryObj<typeof TimesCardUI>;

export const Primary: Story = {
  args: {
    location: "Albany",
    timeSeats: [
      { time: "3:30 PM", seatsAvailable: 219 },
      { time: "6:30 PM", seatsAvailable: 9 },
      { time: "9:00 PM", seatsAvailable: 259 },
    ],
  },
};
