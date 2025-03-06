import WeatherForecast from "../components/WeatherForecast.tsx";
import LogoutLink from "../components/LogoutLink.tsx";
import AuthorizeView, { AuthorizedUser } from "../components/AuthorizeView.tsx";
import { Typography } from "@mui/material";

function Home() {
  return (
    <AuthorizeView>
      <Typography component="span">
        <LogoutLink>
          Logout <AuthorizedUser value="email" />
        </LogoutLink>
      </Typography>
      <WeatherForecast />
    </AuthorizeView>
  );
}

export default Home;
