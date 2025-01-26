import { useState } from 'react';

const Array2 = () => {
  const [counters, setCounters] = useState<number[]>([0, 0, 0]);

  const handleIncrementClick = (index: number) => {
    setCounters(counters.map((counter, i) => (i === index ? counter + 1 : counter)));
  };

  return (
    <>
      <ul className='px-4'>
        {counters.map((counter, index) => (
          <li key={index} className='list-disc mb-2'>
            {counter}
            <button
              type='button'
              className='rounded bg-green-500 p-1 ml-2 text-white'
              onClick={() => handleIncrementClick(index)}
            >
              Add
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Array2;
