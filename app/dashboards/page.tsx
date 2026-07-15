// "use client";

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { getUserInfo } from "@/services/authService";
// import { getAccessToken } from "@/lib/auth";

// export default function DashboardPage() {
//   const [user, setUserState] = useState<any>(null);
//   const router = useRouter();

//   useEffect(() => {
//     async function load() {
//       const token = getAccessToken();

//       if (!token) {
//         router.push("/login");
//         return;
//       }

//       const data = await getUserInfo();

//       setUserState(data);
//     }

//     load();
//   }, []);

//   return (
//     <div>
//       <h1>Dashboard</h1>

//       {user ? (
//         <pre>{JSON.stringify(user, null, 2)}</pre>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }\

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboards/student");
  }, [router]);

  return <p>Redirecting...</p>;
}