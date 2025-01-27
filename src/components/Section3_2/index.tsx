import Form from './Form';

const Section3_2 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>state構造の選択</h2>

      <h3>関連するステートをグループ化、冗長なステートを避ける</h3>
      <div className='inline-block m-2'>
        <Form />
      </div>

      <h3>state内の重複を避ける</h3>
    </>
  );
};

export default Section3_2;
