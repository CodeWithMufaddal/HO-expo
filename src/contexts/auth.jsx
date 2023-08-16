import { Redirect, useRootNavigation, useRouter, useSegments } from "expo-router";
import React, { useContext, useEffect, useState, createContext } from "react";

// Define the AuthContextValue interface
const AuthContext = createContext();

export function Provider({ children }) {
  const [user, setAuth] = useState(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  // This hook will protect the route access based on user authentication.
  const useProtectedRoute = (user) => {
    const segments = useSegments();
    const router = useRouter();

    // checking that navigation is all good;
    const [isNavigationReady, setNavigationReady] = useState(false);
    const rootNavigation = useRootNavigation();

    useEffect(() => {
      const unsubscribe = rootNavigation?.addListener("state", (event) => {
        setNavigationReady(true);
      });
      return function cleanup() {
        if (unsubscribe) {
          unsubscribe();
        }
      };
    }, [rootNavigation]);

    useEffect(() => {
      if (!isNavigationReady) {
        return;
      }

      const inAuthGroup = segments[0] === "(auth)";
      console.log(inAuthGroup, 'segments in context');
      if (!authInitialized) return;

      if (!user && !inAuthGroup) {
      // if (true) {
        // Redirect to the sign-in page.
        router.replace("/signIn");
      } else if (user && inAuthGroup) {
        // Redirect away from the sign-in page.
        router.push("/");
      }
    }, [user, segments, authInitialized, isNavigationReady]);
  };

  useEffect(() => {
    // Simulating the login state here.
    const isLoggedIn = false; // Set it to true if the user is logged in
    if (isLoggedIn) {
      setAuth({}); // Set user data here
    }

    setAuthInitialized(true);
  }, []);


  const logout = async () => {
    try {
      // Simulating the logout action here.
      return { error: undefined, data: {} };
    } catch (error) {
      return { error, data: undefined };
    } finally {
      setAuth(null);
    }
  };

  const login = async (email, password) => {
    try {
      console.log(email, password);
      // Simulating the login action here.
      const response = {}; // Replace this with actual login logic if required

      setAuth(response);
      return { data: response, error: undefined };
    } catch (error) {
      setAuth(null);
      return { error: error, data: undefined };
    }
  };


  const createAccount = async (email, password, username) => {
    try {
      console.log(email, password, username);

      // Simulating the sign-up action here.
      const response = {}; // Replace this with actual sign-up logic if required

      setAuth(response);
      return { data: response, error: undefined };
    } catch (error) {
      setAuth(null);
      return { error: error, data: undefined };
    }
  };

  useProtectedRoute(user);

  return (
    <AuthContext.Provider
      value={{ signIn: login, signOut: logout, signUp: createAccount, user, authInitialized }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Define the useAuth hook
export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within an AuthContextProvider");
  }

  return authContext;
};
