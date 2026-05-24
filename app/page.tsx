import type { Metadata } from "next";
import SimpleForm from "@/app/components/form/SimpleForm";
import NormalForm from "@/app/components/form/NormalForm";
import CustomForm from "@/app/components/custom-form/CustomForm";

export default function IndexPage() {
  return (<div>
    {/*<Counter />*/}
    {/*<SimpleForm />*/}
    {/*<NormalForm />*/}
    <CustomForm />
  </div>);
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
