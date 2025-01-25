import type { AvatarProps } from './types';
import { getImageUrl } from './utils';

const Avatar = ({ person, size }: AvatarProps) => (
  <div className='inline-block mr-2'>
    <img className='avatar' src={getImageUrl(person)} alt={person.name} width={size} height={size} />
  </div>
);

export default Avatar;
