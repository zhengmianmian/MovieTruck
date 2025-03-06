import {
  Button,
  Typography,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Stack,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginForm, loginSchema } from "../formSchemas/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberme: false,
    },
  });
  const navigate = useNavigate();

  const loginUser = async ({
    email,
    password,
    rememberme,
  }: {
    email: string;
    password: string;
    rememberme: boolean;
  }) => {
    if (!email || !password) {
      throw new Error("Please fill in all fields");
    }
    const loginurl = rememberme
      ? "/login?useCookies=true"
      : "/login?useSessionCookies=true";

    const response = await fetch(loginurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error Logging In");
    }
  };

  const { mutate, error } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      window.location.href = "/";
    },
  });

  return (
    <Stack
      gap={2}
      component="form"
      onSubmit={handleSubmit((data) => mutate(data))}
    >
      <Typography variant="h1">Login</Typography>

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            type="password"
            label="Password"
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        )}
      />

      <FormGroup>
        <Controller
          name="rememberme"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              control={<Checkbox {...field} checked={field.value} />}
              label="Remember Me"
            />
          )}
        />
      </FormGroup>

      <Button type="submit" variant="contained">
        Login
      </Button>

      <Button variant="contained" onClick={() => navigate("/register")}>
        Register
      </Button>

      {error && <Typography color="error">{error.message}</Typography>}
    </Stack>
  );
}

export default Login;
