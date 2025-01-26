import Button3 from './Button3';

const Toolbar2 = () => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>, message: string) => {
    e.stopPropagation();
    alert(message);
  };

  return (
    <>
      <div className='bg-gray-300 rounded p-2' onClick={() => handleClick('Toolbar')}>
        <div className='inline-block m-2'>
          <Button3 message='Playing4'>Play Movie</Button3>
        </div>
        <div className='inline-block m-2'>
          <Button3 message='Uploading4'>Upload Image</Button3>
        </div>
      </div>
    </>
  );
};

export default Toolbar2;
