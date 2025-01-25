import Item from './Item';

const Section1_5 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>条件付きレンダー</h2>
      <ul>
        <Item isPacked={true} name='Space suit' />
        <Item isPacked={true} name='Helmet with a golden leaf' />
        <Item isPacked={false} name='Photo of Tam' />
      </ul>
    </>
  );
};

export default Section1_5;
