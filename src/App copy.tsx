import Avatar from './components/Avatar';
import Card from './components/Card';
import Item from './components/Item';
import Profile from './components/Profile';
import TodoList1 from './components/TodoList1';
import TodoList2 from './components/TodoList2';

const App = () => (
  <>
    <h1 className='text-center text-semibold text-2xl'>React Learn</h1>

    <section className='text-center my-8'>
      <h2 className='text-xl'>初めてのコンポーネント</h2>
      <div>
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>

    <section className='text-center my-8'>
      <h2 className='text-xl'>JSXでマークアップを記述する</h2>
      <div>
        <TodoList1 />
      </div>
    </section>

    <section className='text-center my-8'>
      <h2 className='text-xl'>JSXに波括弧でJavaScriptを含める</h2>
      <div>
        <TodoList2 />
      </div>
    </section>

    <section className='text-center my-8'>
      <h2 className='text-xl'>コンポーネントにPropを渡す</h2>
      <div>
        <Card>
          <Avatar
            size={100}
            person={{
              name: 'Katsuko Saruhashi',
              imageId: 'YfeOqp2',
            }}
          />
        </Card>
      </div>
    </section>

    <section className='text-center my-8'>
      <h2 className='text-xl'>条件付きレンダー</h2>
      <div>
        <Item isPacked={true} name='アイテム1' />
        <Item isPacked={false} name='アイテム2' />
        <Item isPacked={true} name='アイテム3' />
      </div>
    </section>
  </>
);

export default App;
