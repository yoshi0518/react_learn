import Gallery from './Gallery';

const Section2_2 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>state：コンポーネントのメモリ</h2>
      <div className='mb-4'>
        <Gallery />
      </div>
      <div>
        <Gallery />
      </div>
    </>
  );
};

export default Section2_2;
