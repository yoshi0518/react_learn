const Item = ({ name, isPacked }: { name: string; isPacked: boolean }) => (
  <>
    <li>
      {name} {isPacked && ' ✔'}
    </li>
  </>
);

export default Item;
