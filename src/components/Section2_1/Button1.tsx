const Button1 = ({ message, children }: { message: string; children: React.ReactNode }) => {
  const handleClick = () => alert(message);

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className='rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      >
        {children}
      </button>
    </>
  );
};

export default Button1;
