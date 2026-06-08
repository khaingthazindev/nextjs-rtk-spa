'use client';

import WithProtectedRoute from "@/app/components/WithProtectedRoute";

function HomePage() {
  return (<div>
    <h1>Home Page</h1>
  </div>);
}

const ProtectedHomePage= WithProtectedRoute(HomePage);
export default ProtectedHomePage;