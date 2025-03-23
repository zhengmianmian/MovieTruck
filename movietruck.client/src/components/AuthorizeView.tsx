import { Box } from "@mui/material";
import React, { useState, useEffect, createContext, useContext } from "react";
interface User {
  email: string;
}
// Define the shape of the authentication context
interface AuthContextType {
  user: User;
  authorized: boolean;
}

const UserContext = createContext<AuthContextType | null>(null);

function AuthContextProvider(props: { children: React.ReactNode }) {
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true); // add a loading state

  const [user, setUser] = useState<User>({ email: "" });

  useEffect(() => {
    // Get the cookie value
    let retryCount = 0; // initialize the retry count
    const maxRetries = 10; // set the maximum number of retries
    const delay: number = 1000; // set the delay in milliseconds

    // define a delay function that returns a promise
    function wait(delay: number) {
      return new Promise((resolve) => setTimeout(resolve, delay));
    }

    // define a fetch function that retries until status 200 or 401
    async function fetchWithRetry(url: string, options: any) {
      try {
        // make the fetch request
        const response = await fetch(url, options);

        // check the status code
        if (response.status == 200) {
          console.log("Authorized");
          const j = await response.json();
          setUser({ email: j.email });
          setAuthorized(true);
          return response; // return the response
        } else if (response.status == 401) {
          console.log("Unauthorized");
          return response; // return the response
        } else {
          // throw an error to trigger the catch block
          throw new Error("" + response.status);
        }
      } catch (error) {
        // increment the retry count
        retryCount++;
        // check if the retry limit is reached
        if (retryCount > maxRetries) {
          // stop retrying and rethrow the error
          throw error;
        } else {
          // wait for some time and retry
          await wait(delay);
          return fetchWithRetry(url, options);
        }
      }
    }

    // call the fetch function with retry logic
    fetchWithRetry("/pingauth", {
      method: "GET",
    })
      .catch((error) => {
        // handle the final error
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false); // set loading to false when the fetch is done
      });
  }, []);

  return loading ? (
    <Box>Loading...</Box>
  ) : (
    <UserContext.Provider value={{ user, authorized }}>
      {props.children}
    </UserContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }
  return context; // Exports { user, authorized }
}

export function AuthorizedUser(props: { value: string }) {
  const { user } = useAuth();
  return props.value === "email" ? <>{user.email}</> : <></>;
}

export default AuthContextProvider;
