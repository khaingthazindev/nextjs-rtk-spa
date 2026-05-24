'use client';

import useCustomForm from "@/app/components/custom-form/useCustomForm";

interface ProfileForm {
  name: string;
  email: string;
}
export default function CustomForm() {
  const {register, handleSubmit} = useCustomForm<ProfileForm>({
    defaultValues: {
      name: "Thazin",
      email: "thazin@gmail.com"
    }
  });
  const onSubmit = (values: ProfileForm) => {
    console.log('Submit', values);
  }
  return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" {...register('name')} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" {...register('email')} />
      </div>
      <div>
        <button type={'submit'}>Submit</button>
      </div>
    </form>
  </div>)
}