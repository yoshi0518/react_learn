import { useImmer } from 'use-immer';

const Form2 = () => {
  const [person, setPerson] = useImmer({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hamburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((draft) => {
      draft.name = e.target.value;
    });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((draft) => {
      draft.artwork.title = e.target.value;
    });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((draft) => {
      draft.artwork.city = e.target.value;
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((draft) => {
      draft.artwork.image = e.target.value;
    });
  };

  return (
    <>
      <label>
        Name：
        <input
          value={person.name}
          onChange={handleNameChange}
          className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        />
      </label>
      <label>
        Title：
        <input
          value={person.artwork.title}
          onChange={handleTitleChange}
          className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        />
      </label>
      <label>
        City：
        <input
          value={person.artwork.city}
          onChange={handleCityChange}
          className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        />
      </label>
      <label>
        Image：
        <input
          value={person.artwork.image}
          onChange={handleImageChange}
          className='block border border-gray-300 rounded p-1 mb-1 w-[250px]'
        />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {' by '}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  );
};

export default Form2;
