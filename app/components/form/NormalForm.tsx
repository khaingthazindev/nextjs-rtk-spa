'use client';

import {FormEvent, useState} from "react";

export default function NormalForm() {
  const [data, setData] = useState({
    name: '',
    age: 0
  });
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('data: ', data);
  }
  
  return (<div>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text"
               name={"name"}
               value={data.name}
               onChange={(event) => setData({...data, name: event.target.value})} />
      </div>
      <div>
        <label htmlFor="age">Age</label>
        <input type="text"
               name={"age"}
               value={data.age}
               onChange={(event) => setData({...data, age: +event.target.value})} />
      </div>
      <div>
        <button type={'submit'}>Submit</button>
      </div>
    </form>
  </div>);
}