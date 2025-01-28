import { useState } from 'react';

const initialItems = [
  { title: 'pretzels', id: 0 },
  { title: 'crispy seaweed', id: 1 },
  { title: 'granola bar', id: 2 },
];

const Menu = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedId, setSelectedId] = useState(0);

  const selectedItem = items.find((item) => item.id === selectedId);

  const handleItemChange = (id: number, e: React.ChangeEvent<HTMLInputElement>) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, title: e.target.value };
        }
        return item;
      }),
    );
  };

  return (
    <>
      <h2>What's your travel snack?</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              value={item.title}
              onChange={(e) => handleItemChange(item.id, e)}
              className='border border-gray-300 rounded p-1 mb-1'
            />{' '}
            <button
              type='button'
              onClick={() => setSelectedId(item.id)}
              className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mb-1'
            >
              Choose
            </button>
          </li>
        ))}
      </ul>
      <p>You picked {selectedItem?.title}.</p>
    </>
  );
};

export default Menu;
