'use client';

import {useController, UseControllerProps, useForm} from "react-hook-form";

type FormInputs = {
  name: string;
  age: string;
}

function Input(props: UseControllerProps<FormInputs>) {
  const { field, fieldState } = useController(props);
  
  return (<div>
    <input {...field} placeholder={props.name} />
    <p>{fieldState.isTouched && 'Touched'}</p>
    <p>{fieldState.isDirty && 'Dirty'}</p>
    <p>{fieldState.invalid ? 'invalid' : 'valid'}</p>
  </div>)
}

export default function FormWithMui() {
  const { handleSubmit, control, reset } = useForm<FormInputs>({
    defaultValues: {
      name: 'Thazin',
      age: '30',
    }
  });
  const onSubmit = (data: FormInputs) => console.log(data);
  
  return (<div>
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input
        control={control}
        name="name"
        rules={{ required: true }} />
      <Input
        control={control}
        name="age"
        rules={{ required: true }} />
      <input type="submit" />
    </form>
  </div>)
}