import LogoutLink from "../components/LogoutLink.tsx";
import AuthorizeView, { AuthorizedUser } from "../components/AuthorizeView.tsx";
import { Typography } from "@mui/material";
import MovieCarousel from "../components/movieCarousel/MovieCarousel.tsx";

function Home() {
  return (
    <>
      {/* <AuthorizeView>
        <Typography component="span">
          <LogoutLink>
            Logout <AuthorizedUser value="email" />
          </LogoutLink>
        </Typography>
      </AuthorizeView> */}
      <MovieCarousel />
    </>
  );
}

export default Home;
