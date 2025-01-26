import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h2 className='text-xl my-4'>Home</h2>

    <h3 className='text-semibold mt-4'>1. UIの記述</h3>
    <Link to='/section1_1' className='text-blue-700 underline ml-4 block'>
      1. 初めてのコンポーネント
    </Link>
    <Link to='/section1_2' className='text-blue-700 underline ml-4 block'>
      2. JSXでマークアップを記述する
    </Link>
    <Link to='/section1_3' className='text-blue-700 underline ml-4 block'>
      3. JSXに波括弧でJavaScriptを含める
    </Link>
    <Link to='/section1_4' className='text-blue-700 underline ml-4 block'>
      4. コンポーネントにpropsを渡す
    </Link>
    <Link to='/section1_5' className='text-blue-700 underline ml-4 block'>
      5. 条件付きレンダー
    </Link>
    <Link to='/section1_6' className='text-blue-700 underline ml-4 block'>
      6. リストのレンダー
    </Link>

    <h3 className='text-semibold mt-4'>2. インタラクティビティの追加</h3>
    <Link to='/section2_1' className='text-blue-700 underline ml-4 block'>
      1. イベントハンドラでのpropsの読み取り
    </Link>
    <Link to='/section2_2' className='text-blue-700 underline ml-4 block'>
      2. state：コンポーネントのメモリ
    </Link>
    <Link to='/section2_3' className='text-blue-700 underline ml-4 block'>
      3. state内のオブジェクトの更新
    </Link>
    <Link to='/section2_4' className='text-blue-700 underline ml-4 block'>
      4. state内の配列の更新
    </Link>

    <h3 className='text-semibold mt-4'>3. stateの管理</h3>
    <Link to='/section3_1' className='text-blue-700 underline ml-4 block'>
      1. stateの管理
    </Link>
  </>
);

export default Home;
