import Item from './Item';
import type { PeopleProps } from './types';

const List = ({ peoples }: { peoples: PeopleProps[] }) => (
  <ul>
    {peoples.map((people) => (
      <Item key={people.id} people={people} />
    ))}
  </ul>
);

export default List;
