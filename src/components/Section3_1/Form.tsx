import { useState } from 'react';

const submitForm = async (answer: string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldError = answer.toLowerCase() !== 'lima';
      if (shouldError) {
        reject(new Error('Good guess but a wrong answer. Try again!'));
      } else {
        resolve(answer);
      }
    }, 1500);
  });
};

const Form = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err: unknown) {
      setStatus('typing');
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <h2>City quiz</h2>
      <p>In which city is there a billboard that turns air into drinkable water?</p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
          className='border border-gray-300 rounded p-1 mb-1 w-[400px]'
        />
        <br />
        <button
          type='button'
          disabled={answer.length === 0 || status === 'submitting'}
          className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Submit
        </button>
        {error !== null && <p className='Error'>{error}</p>}
        <p>{status}</p>
      </form>
    </>
  );
};

export default Form;
