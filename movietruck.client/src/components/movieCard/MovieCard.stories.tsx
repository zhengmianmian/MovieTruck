// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import MovieCard from "./MovieCard";
const meta: Meta<typeof MovieCard> = {
  component: MovieCard,
};
export default meta;

type Story = StoryObj<typeof MovieCard>;

export const Primary: Story = {
  args: {
    title: "King Lion",
    sideCoverUrl:
      "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
    description: "xxx",
  },
};
