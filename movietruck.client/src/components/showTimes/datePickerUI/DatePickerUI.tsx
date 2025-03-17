import { Stack, Typography } from "@mui/material";
import { FC, useRef } from "react";
import { formatDate } from "../../../utils/transformDate";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export interface DatePickerUIProps {
  dates: string[];
  onSelectDate: () => void;
}

const DatePickerUI: FC<DatePickerUIProps> = ({ dates, onSelectDate }) => {
  const datePickerRef = useRef<HTMLDivElement | null>(null);
  const scrollAmount = 500; // Adjust scroll distance as needed

  const handleScroll = (direction: "left" | "right") => {
    if (datePickerRef.current) {
      const scrollLeft = direction === "left" ? -scrollAmount : scrollAmount;
      datePickerRef.current.scrollBy({ left: scrollLeft, behavior: "smooth" });
    }
  };

  return (
    <Stack direction="row" sx={{ mx: { xs: 2, sm: 4, md: 8, lg: 16, xl: 32 } }}>
      <Stack
        ref={datePickerRef}
        direction="row"
        gap={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflowX: "scroll",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {dates.length > 0 &&
          dates.map((date) => (
            <Typography
              key={date}
              onClick={() => onSelectDate()}
              variant="body1"
              sx={{ cursor: "pointer", flexShrink: 0 }}
            >
              {formatDate(date)}
            </Typography>
          ))}
      </Stack>
      <IconButton onClick={() => handleScroll("left")}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton onClick={() => handleScroll("right")}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Stack>
  );
};

export default DatePickerUI;
