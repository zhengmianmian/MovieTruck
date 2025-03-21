// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import MovieCarouselUI from "./MovieCarouselUI";
import { MemoryRouter } from "react-router-dom";

const meta: Meta<typeof MovieCarouselUI> = {
  component: MovieCarouselUI,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof MovieCarouselUI>;

export const Primary: Story = {
  args: {
    movieList: [
      {
        id: 1,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 2,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 3,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 4,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 5,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 6,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 7,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
      {
        id: 8,
        title: "King Lion",
        sideCoverUrl:
          "https://posterworx.co.nz/pub/media/catalog/product/cache/1109edc0aaeaca1c3b3776e1d76e46d0/4/6/4618-2.jpg",
      },
    ],
  },
};
