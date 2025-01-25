import type { PeopleProps } from './types';

export const getImageUrl = (person: PeopleProps) => `https://i.imgur.com/${person.imageId}s.jpg`;
