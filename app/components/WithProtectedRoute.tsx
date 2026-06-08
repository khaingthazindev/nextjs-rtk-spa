'use client';

import React, {useEffect} from "react";
import useAuth from "@/lib/hooks/useAuth";
import {usePathname, useRouter} from "next/navigation";

export default function WithProtectedRoute(Component: React.ComponentType<any>) {
  return function WrappedComponent(props: any){
    const isAuthenticated = useAuth();
    const router = useRouter();
    const path = usePathname();
    
      useEffect(() => {
        if (!isAuthenticated) {
          router.push(`/login?redirectUrl=${path}`);
        }
      }, []);
      
      if (!isAuthenticated) {
        return <h3>Loading...</h3>
      } else {
        return <Component {...props} />;
      }
  }
}