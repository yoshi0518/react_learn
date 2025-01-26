import { useState } from 'react';
import { sculptureList } from './data';

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNextClick = () =>
    setIndex((prev) => {
      if (prev < sculptureList.length - 1) {
        return prev + 1;
      }
      return prev;
    });
  const handlePrevClick = () =>
    setIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  const handleDetailClick = () => setShowMore((prev) => !prev);

  return (
    <>
      <section>
        <button
          type='button'
          onClick={handlePrevClick}
          className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2'
        >
          Prev
        </button>
        <button
          type='button'
          onClick={handleNextClick}
          className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Next
        </button>

        <h2>
          <i>{sculptureList[index].name} </i>
          by {sculptureList[index].artist}
        </h2>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
        <button type='button' onClick={handleDetailClick}>
          {showMore ? 'Hide' : 'Show'} details
        </button>
        {showMore && <p>{sculptureList[index].description}</p>}
        <img src={sculptureList[index].url} alt={sculptureList[index].alt} />
      </section>
    </>
  );
};

export default Gallery;
