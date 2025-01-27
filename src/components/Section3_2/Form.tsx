import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({ firstName: '', lastName: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  const fullName = `${person.firstName} ${person.lastName}`;

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={person.firstName}
          onChange={handleChange}
          name='firstName'
          className='block border border-gray-300 rounded p-1 mb-1'
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={person.lastName}
          onChange={handleChange}
          name='lastName'
          className='block border border-gray-300 rounded p-1 mb-1'
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};

export default Form;
