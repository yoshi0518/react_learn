import Button1 from './Button1';
import Button2 from './Button2';
import Toolbar1 from './Toolbar1';
import Toolbar2 from './Toolbar2';
import Form from './Form';

const Section2_1 = () => {
  const handleAlert = () => alert('Playing2');

  return (
    <>
      <h2 className='text-xl my-4'>イベントへの応答</h2>

      <h3>イベントハンドラでのpropsの読み取り</h3>
      <div className='inline-block m-2'>
        <Button1 message='Playing1'>Play Movie</Button1>
      </div>
      <div className='inline-block m-2'>
        <Button1 message='Uploading1'>Upload Image</Button1>
      </div>

      <h3>イベントハンドラをpropsとして渡す</h3>
      <div className='inline-block m-2'>
        <Button2 handleClick={handleAlert}>Play Movie</Button2>
      </div>
      <div className='inline-block m-2'>
        <Button2 handleClick={() => alert('Uploading2')}>Upload Image</Button2>
      </div>

      <h3>イベント伝搬</h3>
      <div className='m-2'>
        <Toolbar1 />
      </div>

      <h3>伝搬の停止</h3>
      <div className='m-2'>
        <Toolbar2 />
      </div>

      <h3>デフォルト動作を防ぐ</h3>
      <div className='m-2'>
        <Form />
      </div>
    </>
  );
};

export default Section2_1;
