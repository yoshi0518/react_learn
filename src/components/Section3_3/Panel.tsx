const Panel = ({
  title,
  children,
  isActive,
  onShow,
}: { title: string; children: React.ReactNode; isActive: boolean; onShow: () => void }) => (
  <>
    <section className='panel'>
      <h3 className='text-md font-bold'>{title}</h3>
      {isActive ? (
        <p>{children}</p>
      ) : (
        <button
          type='button'
          onClick={onShow}
          className='rounded bg-gray-400 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
        >
          Show
        </button>
      )}
    </section>
  </>
);

export default Panel;
