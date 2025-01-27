import Accordion from './Accordion';
import Form from './Form';

const Section3_1 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>stateの管理</h2>

      <h3>stateを使って入力に反応する</h3>
      <div className='inline-block m-2'>
        <Form />
      </div>

      <h3>コンポーネント間でstateを共有する</h3>
      <Accordion />
    </>
  );
};

export default Section3_1;
