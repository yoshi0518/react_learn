import type { PersonProps } from './types';

export const getImageUrl = (person: PersonProps, size = 's') => `https://i.imgur.com/${person.imageId}${size}.jpg`;
