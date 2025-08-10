import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { sendSignInEmail } from "../utils/sendSignInEmail";

const ProtectedRoutes = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      setSearchParams({ "sign-in": "true" });
    }

    if (isLoaded && isSignedIn) {
      const hasSentEmail = sessionStorage.getItem("emailSent");

      if (!hasSentEmail) {
        const name = user?.fullName || user?.username || "Unknown";
        const email = user?.primaryEmailAddress?.emailAddress || "No Email";

        sendSignInEmail({ name, email });
        sessionStorage.setItem("emailSent", "true");
      }
    }
  }, [isLoaded, isSignedIn, user, setSearchParams]);

  return <>{children}</>;
};

export default ProtectedRoutes;
