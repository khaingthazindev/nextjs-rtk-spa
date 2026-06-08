'use client';

import type { Metadata } from "next";
import SimpleForm from "@/app/components/form/SimpleForm";
import NormalForm from "@/app/components/form/NormalForm";
import CustomForm from "@/app/components/custom-form/CustomForm";
import FormWithMui from "@/app/components/form/FormWithMui";
import WithProtectedRoute from "@/app/components/WithProtectedRoute";

function IndexPage() {
  return (<div>
    {/*<Counter />*/}
    {/*<SimpleForm />*/}
    {/*<NormalForm />*/}
    {/*<CustomForm />*/}
    {/*<FormWithMui />*/}
  </div>);
}

// export const metadata: Metadata = {
//   title: "Redux Toolkit",
// };


const ProtectedIndexPage= WithProtectedRoute(IndexPage);
export default ProtectedIndexPage;