import { Stack, Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
  const links = [
    "Privacy",
    "Customer Service",
    "FAQ",
    "Gift shop",
    "Terms of use",
  ];
  return (
    <Stack
      direction="row"
      gap={4}
      mt={2}
      p={4}
      sx={{
        bgcolor: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography variant="h3">MovieTruck</Typography>
      <Typography variant="h6">2025 - MTK Cinemas</Typography>
      <Stack direction="row" gap={2}>
        {links.map((link) => (
          <Typography variant="body1">{link}</Typography>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
