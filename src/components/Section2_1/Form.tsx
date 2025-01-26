const Form = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Submitting');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Name' className='block border border-gray-300 rounded p-1 mb-1' />
      <input type='text' placeholder='Email' className='block border border-gray-300 rounded p-1 mb-1' />
      <button
        type='submit'
        className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
