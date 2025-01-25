import Avatar from './Avatar';

const Section1_4 = () => {
  return (
    <>
      <h2 className='text-xl my-4'>コンポーネントにpropsを渡す</h2>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2',
        }}
      />
      <Avatar
        size={80}
        person={{
          name: 'Aklilu Lemma',
          imageId: 'OKS67lh',
        }}
      />
      <Avatar
        size={50}
        person={{
          name: 'Lin Lanying',
          imageId: '1bX5QH6',
        }}
      />
    </>
  );
};

export default Section1_4;
