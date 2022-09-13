import { useEffect, useState } from "react";

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("authenticated")) {
      setLoading(false);
      setAuthenticated(true);
    } else {
      setLoading(false);
      setAuthenticated(false);
    }
  }, []);

  return { authenticated, loading };
};
