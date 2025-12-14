"use client"; // MUST be the first line

import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function TestUser() {
  useEffect(() => {
    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
      console.log("Current user:", user);
    });
  }, []);

  return <div>Check the console to see the current user</div>;
}
