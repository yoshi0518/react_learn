import Form1 from './Form1';
import Form2 from './Form2';

const Section2_3 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>state内のオブジェクトの更新</h2>

      <h3>スプレッド構文を使ったオブジェクトのコピー</h3>
      <div className='m-2'>
        <Form1 />
      </div>

      <h3>ネストされたオブジェクトの更新</h3>
      <div className='m-2'>
        <Form2 />
      </div>
    </>
  );
};

export default Section2_3;
