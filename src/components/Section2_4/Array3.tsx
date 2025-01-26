import { useState } from 'react';
const Array3 = () => {
  const [name, setName] = useState('');
  const [items, setItems] = useState<string[]>(['Marta Colvin Andrade', 'Lamidi Olonade Fakeye', 'Louise Nevelson']);

  const handleInsert = () => {
    if (!name) return;
    const nextItems: string[] = [];
    items.forEach((item, index) => {
      if (index === 1) nextItems.push(name);
      nextItems.push(item);
    });
    setItems(nextItems);
    setName('');
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
          onClick={handleInsert}
          className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-2'
        >
          Insert
        </button>
      </div>
      <ul className='px-4'>
        {items.map((item) => (
          <li key={item} className='list-disc mb-2'>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Array3;
