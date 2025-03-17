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
          width: 350,
          borderLeft: "20px solid #d61023",
          bgcolor: "#f3f3f3",
          p: 2,
          overflow: "visible",
        }}
      >
        <Typography variant="h5">{time}</Typography>
      </Box>
    </Tooltip>
  );
};

export default TimeCardUI;
