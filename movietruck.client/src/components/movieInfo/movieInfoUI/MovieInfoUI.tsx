import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { FC } from "react";
import MovieCardUI, {
  MovieCardUIProps,
} from "../../movieCarousel/movieCard/MovieCardUI";

export type MovieInfoUIProps = Omit<
  MovieCardUIProps,
  "largeCoverUrl" | "smallCoverUrl" | "onInfoClick" | "onTimesTicketClick"
>;
const MovieInfoUI: FC<MovieInfoUIProps> = (props) => {
  const { title, description, releaseDate, runningTime, director, cast } =
    props;
  const details = [
    { name: "Release Date", value: releaseDate },
    {
      name: "Running Time",
      value: runningTime ? `${runningTime} min` : undefined,
    },
    { name: "Director", value: director },
    { name: "Cast", value: cast },
  ].filter((detail) => detail.value);

  return (
    <Stack direction="row">
      <Box px={4}>
        <MovieCardUI {...props} />
      </Box>
      <Stack gap={4}>
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
        <TableContainer>
          <Table>
            <TableBody>
              {details.map((detail) => (
                <TableRow key={detail.name}>
                  <TableCell sx={{ fontWeight: "bold" }}>
                    {detail.name}
                  </TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default MovieInfoUI;
