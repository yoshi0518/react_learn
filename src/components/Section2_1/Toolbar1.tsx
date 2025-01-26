import Button2 from './Button2';

const Toolbar1 = () => {
  return (
    <>
      <div className='bg-gray-300 rounded p-2' onClick={() => alert('Toolbar')}>
        <div className='inline-block m-2'>
          <Button2 handleClick={() => alert('Playing3')}>Play Movie</Button2>
        </div>
        <div className='inline-block m-2'>
          <Button2 handleClick={() => alert('Uploading3')}>Upload Image</Button2>
        </div>
      </div>
    </>
  );
};

export default Toolbar1;
