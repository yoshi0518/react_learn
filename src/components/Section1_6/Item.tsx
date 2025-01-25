import type { PeopleProps } from './types';
import { getImageUrl } from './utils';

const Item = ({ people }: { people: PeopleProps }) => (
  <li className='mb-2'>
    <img src={getImageUrl(people)} alt={people.name} className='inline' />
    <p className='inline'>
      <b>{people.name}:</b>
      {` ${people.profession} known for ${people.accomplishment}`}
    </p>
  </li>
);

export default Item;
