'use client';

import React from "react";
import useAuth from "@/lib/hooks/useAuth";
import {useRouter} from "next/navigation";

export default function WithProtectedRoute(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any){
    const isAuthenticated = useAuth();
    const router = useRouter();
    if (!isAuthenticated) {
      router.push("/login");
    } else {
      return <Component {...props} />
    }
  }
}