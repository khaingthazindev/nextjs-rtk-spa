'use client';

import {ChangeEvent, FormEvent, useState} from "react";

interface Map {
  [key: string]: any;
}

interface UseCustomFormInput<T extends Map> {
  defaultValues?: T;
}

type UseCustomHandleSubmit<T> = (data: T) =>  void;

export default function useCustomForm<T extends Map>({defaultValues}: UseCustomFormInput<T>) {
  const [formValue, setFormValue] = useState<T>(defaultValues ? defaultValues: {} as any);
  
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    });
  }
  function register(name: string) {
    return {
      name: name,
      value: formValue[name],
      onChange: onChange
    }
  }
  function handleSubmit(callback: UseCustomHandleSubmit<T>) {
    return function callbackHandler(e: FormEvent<HTMLFormElement>) {
      callback(formValue);
      e.preventDefault();
    }
  }
  
  return {register, handleSubmit};
}