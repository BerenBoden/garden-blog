import { useSession, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

function dashboard() {
  const router = useRouter();
  const { status, data } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  useEffect(() => {
    if (status === "authenticated") {
      const encodedState = encodeURIComponent(JSON.stringify(data))
      router.push({
        pathname: 'http://localhost:3001/dashboard',
        search: `?state=${encodedState}`,
      })
    }
  }, [status]);

  return <div>Loading...</div>;
}

export default dashboard;
