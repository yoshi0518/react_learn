import { useState } from 'react';

const Form = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const fullName = `${firstName} ${lastName}`;

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <div>Let's check you in</div>
      <label className='block'>
        First Name：
        <input
          type='text'
          placeholder='Name'
          className='border border-gray-300 rounded p-1 mb-1'
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label className='block'>
        Last Name：
        <input
          type='text'
          placeholder='Email'
          className='border border-gray-300 rounded p-1 mb-1'
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
};

export default Form;
