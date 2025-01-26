import { useState } from 'react';

const Array1 = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState<string[]>([]);

  const handleAdd = () => {
    if (!name) return;
    setItems([...items, name]);
    setName('');
  };

  const handleDelete = (name: string) => {
    setItems(items.filter((item) => item !== name));
  };

  return (
    <>
      <div>
        <input
          type='text'
          name='name'
          placeholder='item name'
          className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <button
          type='button'
          onClick={handleAdd}
          className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2'
        >
          Add
        </button>
      </div>
      <ul className='px-4'>
        {items.map((item) => (
          <li key={item} className='list-disc mb-2'>
            {item}
            <button
              type='button'
              className='rounded bg-pink-500 p-1 ml-2 text-white'
              onClick={() => handleDelete(item)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Array1;
