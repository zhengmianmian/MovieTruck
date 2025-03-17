import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useShowDates } from "../../api/useShowDates";
import DatePickerUI from "./datePickerUI/DatePickerUI";

const ShowTimes: FC = () => {
  const { id } = useParams();
  const location = "Albany";
  const { data: dates, isLoading, error } = useShowDates(id!, location);

  return (
    <Box sx={{ mt: 8 }}>
      {isLoading && <Typography>Loading dates...</Typography>}
      {error && <Typography>{error.message}</Typography>}
      {!isLoading && !error && <DatePickerUI dates={dates} />}
    </Box>
  );
};

export default ShowTimes;
