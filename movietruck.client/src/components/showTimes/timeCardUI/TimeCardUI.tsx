import { Box, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
export interface TimeCardUIProps {
  time: string;
  seatsAvailable: number;
}
const TimeCardUI: FC<TimeCardUIProps> = ({ time, seatsAvailable }) => {
  return (
    <Tooltip
      placement="top"
      title={
        <Typography variant="h6">Seats available: {seatsAvailable}</Typography>
      }
      arrow
    >
      <Box
        sx={{
          width: { xs: "80%", sm: 350 },
          borderLeft: "20px solid #d61023",
          bgcolor: "#f3f3f3",
          p: 2,
          overflow: "visible",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          {time}
        </Typography>
      </Box>
    </Tooltip>
  );
};

export default TimeCardUI;
