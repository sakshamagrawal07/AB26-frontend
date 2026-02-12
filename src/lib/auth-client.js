import { createAuthClient } from "better-auth/react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const authClient = createAuthClient({
  baseURL: `${BACKEND_URL}/api/auth`,
});

export const { signIn, signUp, signOut, useSession } = authClient;
