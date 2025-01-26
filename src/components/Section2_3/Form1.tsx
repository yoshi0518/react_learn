import { useState } from 'react';

const Form1 = () => {
  const [person, setPerson] = useState({
    firstName: 'Barbara',
    lastName: 'Hepworth',
    email: 'bhepworth@sculpture.com',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <input
        type='text'
        name='firstName'
        placeholder='First Name'
        className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        value={person.firstName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='lastName'
        placeholder='Last Name'
        className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        value={person.lastName}
        onChange={handleChange}
      />
      <input
        type='text'
        name='email'
        placeholder='Email'
        className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        value={person.email}
        onChange={handleChange}
      />
      <div>
        <p>First Name：{person.firstName}</p>
        <p>Last Name：{person.lastName}</p>
        <p>Email：{person.email}</p>
      </div>
    </>
  );
};

export default Form1;
