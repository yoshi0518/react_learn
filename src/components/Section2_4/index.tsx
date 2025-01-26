import Array1 from './Array1';
import Array2 from './Array2';
import Array3 from './Array3';
const Section2_4 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>state内のオブジェクトの更新</h2>

      <h3>配列に要素を追加・削除</h3>
      <div className='m-2'>
        <Array1 />
      </div>

      <h3>配列内の要素の置換</h3>
      <div className='m-2'>
        <Array2 />
      </div>

      <h3>配列への挿入</h3>
      <div className='m-2'>
        <Array3 />
      </div>
    </>
  );
};

export default Section2_4;
