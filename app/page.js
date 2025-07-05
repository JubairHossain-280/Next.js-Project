'use client';

import Image from "next/image";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "@/components/Login";

export default function Home() {
  const clientId = '160575353182-k2i4dh32o9paoahqqc75aggn3p6aohl6.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Login />
    </GoogleOAuthProvider>
  );
}
