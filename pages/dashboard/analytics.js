import { useSession, signOut } from "next-auth/react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import AdminLayout from '../../components/layout/admin';

function analytics() {
  const router = useRouter();
  const { status, data } = useSession();
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status]);

  if (status === "authenticated") {
    return (
      <div style={{background: "#F1F5F9"}} className="overflow-hidden bg-black">
        <AdminLayout/>
      </div>
    );
  }

  return <div>Loading...</div>;
}

export default analytics;