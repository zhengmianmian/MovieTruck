// Replace your-renderer with the renderer you are using (e.g., react, vue3, etc.)
import type { Meta, StoryObj } from "@storybook/react";
import MovieInfoUI from "./MovieInfoUI";

const meta: Meta<typeof MovieInfoUI> = {
  component: MovieInfoUI,
};
export default meta;

type Story = StoryObj<typeof MovieInfoUI>;

export const Primary: Story = {
  args: {
    title: "Ne Zha 2",
    sideCoverUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfG73cgO6FjAU5NK3TxA8LSMlrkBE9WVpbA&s",
    description:
      "After the heavenly lightning, although Ne Zha and Ao Bing survived by becoming Spirits, they would soon dissipate completely. Taiyi plans to rebuild Ne Zha and Ao Bing's mortal bodies with the Seven-colored Precious Lotus. However, during the process of reconstruction, numerous obstacles arise. What will become of the fate of Ne Zha and Ao Bing?",
    releaseDate: "10-02-2025",
    runningTime: 144,
    director: "Yu Yang",
    cast: "Joseph, Hao Chen, Mo Han, Yanting Lü, Qi Lü",
  },
};
