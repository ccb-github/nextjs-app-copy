'use client'
import { useEffect, useState } from "react";
import * as Realm from "realm-web";
export function useApp() {
  const [app] = useState<Realm.App>(Realm.getApp(process.env.NEXT_PUBLIC_APP_ID? process.env.NEXT_PUBLIC_APP_ID : "FALLBACK"));
  // Run in useEffect so that App is not created in server-side environment
   
  return app;
}