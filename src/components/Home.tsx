import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <h2 className='text-xl my-4'>Home</h2>

    <h3 className='text-semibold'>1. UIの記述</h3>
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
  </>
);

export default Home;
