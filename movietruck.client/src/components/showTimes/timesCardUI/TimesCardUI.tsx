import { FC } from "react";
import TimeCardUI, { TimeCardUIProps } from "../timeCardUI/TimeCardUI";
import { Card, Stack, Typography } from "@mui/material";

export interface TimesCardUIProps {
  location?: string;
  timeSeats?: TimeCardUIProps[];
}

const TimesCardUI: FC<TimesCardUIProps> = ({ location, timeSeats }) => {
  return (
    <Card sx={{ maxWidth: { xs: "100%", sm: "70%" }, p: 4 }}>
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {location}
      </Typography>
      <Stack mt={2} direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
        {timeSeats &&
          timeSeats.length > 0 &&
          timeSeats.map((timeSeat) => <TimeCardUI {...timeSeat} />)}
      </Stack>
    </Card>
  );
};

export default TimesCardUI;
